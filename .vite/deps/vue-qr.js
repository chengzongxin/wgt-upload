import {
  __commonJS
} from "./chunk-RSJERJUL.js";

// ../../../../../../Users/joe.cheng/Documents/wgt-upload/node_modules/vue-qr/dist/vue-qr.js
var require_vue_qr = __commonJS({
  "../../../../../../Users/joe.cheng/Documents/wgt-upload/node_modules/vue-qr/dist/vue-qr.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("vue-qr", [], e) : "object" == typeof exports ? exports["vue-qr"] = e() : t["vue-qr"] = e();
    }(exports, function() {
      return function(t) {
        var e = {};
        function r(n) {
          if (e[n])
            return e[n].exports;
          var o = e[n] = { i: n, l: false, exports: {} };
          return t[n].call(o.exports, o, o.exports, r), o.l = true, o.exports;
        }
        return r.m = t, r.c = e, r.d = function(t2, e2, n) {
          r.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: n });
        }, r.r = function(t2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        }, r.t = function(t2, e2) {
          if (1 & e2 && (t2 = r(t2)), 8 & e2)
            return t2;
          if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule)
            return t2;
          var n = /* @__PURE__ */ Object.create(null);
          if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2)
            for (var o in t2)
              r.d(n, o, function(e3) {
                return t2[e3];
              }.bind(null, o));
          return n;
        }, r.n = function(t2) {
          var e2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return r.d(e2, "a", e2), e2;
        }, r.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }, r.p = "/dist/", r(r.s = 13);
      }([function(t, e) {
        t.exports = function(t2, e2) {
          if (!(t2 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e) {
        function r(t2, e2) {
          for (var r2 = 0; r2 < e2.length; r2++) {
            var n = e2[r2];
            n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t2, n.key, n);
          }
        }
        t.exports = function(t2, e2, n) {
          return e2 && r(t2.prototype, e2), n && r(t2, n), Object.defineProperty(t2, "prototype", { writable: false }), t2;
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e) {
        function r(e2) {
          return t.exports = r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, t.exports.__esModule = true, t.exports.default = t.exports, r(e2);
        }
        t.exports = r, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, r) {
        t.exports = r(14)();
      }, function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
          return l;
        }), r.d(e, "b", function() {
          return c;
        }), r.d(e, "c", function() {
          return p;
        });
        var n = r(0), o = r.n(n), i = r(1), a = r.n(i);
        function s(t2) {
          var e2 = encodeURI(t2).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
          return e2.length + (e2.length != Number(t2) ? 3 : 0);
        }
        var u = function() {
          function t2(e2) {
            o()(this, t2), this.mode = h.MODE_8BIT_BYTE, this.parsedData = [], this.data = e2;
            for (var r2 = [], n2 = 0, i2 = this.data.length; n2 < i2; n2++) {
              var a2 = [], s2 = this.data.charCodeAt(n2);
              s2 > 65536 ? (a2[0] = 240 | (1835008 & s2) >>> 18, a2[1] = 128 | (258048 & s2) >>> 12, a2[2] = 128 | (4032 & s2) >>> 6, a2[3] = 128 | 63 & s2) : s2 > 2048 ? (a2[0] = 224 | (61440 & s2) >>> 12, a2[1] = 128 | (4032 & s2) >>> 6, a2[2] = 128 | 63 & s2) : s2 > 128 ? (a2[0] = 192 | (1984 & s2) >>> 6, a2[1] = 128 | 63 & s2) : a2[0] = s2, r2.push(a2);
            }
            this.parsedData = Array.prototype.concat.apply([], r2), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
          }
          return a()(t2, [{ key: "getLength", value: function() {
            return this.parsedData.length;
          } }, { key: "write", value: function(t3) {
            for (var e2 = 0, r2 = this.parsedData.length; e2 < r2; e2++)
              t3.put(this.parsedData[e2], 8);
          } }]), t2;
        }(), l = function() {
          function t2() {
            var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.L;
            o()(this, t2), this.moduleCount = 0, this.dataList = [], this.typeNumber = e2, this.errorCorrectLevel = r2, this.moduleCount = 0, this.dataList = [];
          }
          return a()(t2, [{ key: "addData", value: function(t3) {
            if (this.typeNumber <= 0)
              this.typeNumber = function(t4, e3) {
                for (var r2 = 1, n2 = s(t4), o2 = 0, i2 = m.length; o2 < i2; o2++) {
                  var a2 = 0;
                  switch (e3) {
                    case c.L:
                      a2 = m[o2][0];
                      break;
                    case c.M:
                      a2 = m[o2][1];
                      break;
                    case c.Q:
                      a2 = m[o2][2];
                      break;
                    case c.H:
                      a2 = m[o2][3];
                  }
                  if (n2 <= a2)
                    break;
                  r2++;
                }
                if (r2 > m.length)
                  throw new Error("Too long data");
                return r2;
              }(t3, this.errorCorrectLevel);
            else {
              if (this.typeNumber > 40)
                throw new Error("Invalid QR version: ".concat(this.typeNumber));
              if (!function(t4, e3, r2) {
                var n2 = s(e3), o2 = t4 - 1, i2 = 0;
                switch (r2) {
                  case c.L:
                    i2 = m[o2][0];
                    break;
                  case c.M:
                    i2 = m[o2][1];
                    break;
                  case c.Q:
                    i2 = m[o2][2];
                    break;
                  case c.H:
                    i2 = m[o2][3];
                }
                return n2 <= i2;
              }(this.typeNumber, t3, this.errorCorrectLevel))
                throw new Error("Data is too long for QR version: ".concat(this.typeNumber));
            }
            var e2 = new u(t3);
            this.dataList.push(e2), this.dataCache = void 0;
          } }, { key: "isDark", value: function(t3, e2) {
            if (t3 < 0 || this.moduleCount <= t3 || e2 < 0 || this.moduleCount <= e2)
              throw new Error("".concat(t3, ",").concat(e2));
            return this.modules[t3][e2];
          } }, { key: "getModuleCount", value: function() {
            return this.moduleCount;
          } }, { key: "make", value: function() {
            this.makeImpl(false, this.getBestMaskPattern());
          } }, { key: "makeImpl", value: function(e2, r2) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var n2 = 0; n2 < this.moduleCount; n2++) {
              this.modules[n2] = new Array(this.moduleCount);
              for (var o2 = 0; o2 < this.moduleCount; o2++)
                this.modules[n2][o2] = null;
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e2, r2), this.typeNumber >= 7 && this.setupTypeNumber(e2), null == this.dataCache && (this.dataCache = t2.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, r2);
          } }, { key: "setupPositionProbePattern", value: function(t3, e2) {
            for (var r2 = -1; r2 <= 7; r2++)
              if (!(t3 + r2 <= -1 || this.moduleCount <= t3 + r2))
                for (var n2 = -1; n2 <= 7; n2++)
                  e2 + n2 <= -1 || this.moduleCount <= e2 + n2 || (this.modules[t3 + r2][e2 + n2] = 0 <= r2 && r2 <= 6 && (0 == n2 || 6 == n2) || 0 <= n2 && n2 <= 6 && (0 == r2 || 6 == r2) || 2 <= r2 && r2 <= 4 && 2 <= n2 && n2 <= 4);
          } }, { key: "getBestMaskPattern", value: function() {
            if (Number.isInteger(this.maskPattern) && Object.values(f).includes(this.maskPattern))
              return this.maskPattern;
            for (var t3 = 0, e2 = 0, r2 = 0; r2 < 8; r2++) {
              this.makeImpl(true, r2);
              var n2 = p.getLostPoint(this);
              (0 == r2 || t3 > n2) && (t3 = n2, e2 = r2);
            }
            return e2;
          } }, { key: "setupTimingPattern", value: function() {
            for (var t3 = 8; t3 < this.moduleCount - 8; t3++)
              null == this.modules[t3][6] && (this.modules[t3][6] = t3 % 2 == 0);
            for (var e2 = 8; e2 < this.moduleCount - 8; e2++)
              null == this.modules[6][e2] && (this.modules[6][e2] = e2 % 2 == 0);
          } }, { key: "setupPositionAdjustPattern", value: function() {
            for (var t3 = p.getPatternPosition(this.typeNumber), e2 = 0; e2 < t3.length; e2++)
              for (var r2 = 0; r2 < t3.length; r2++) {
                var n2 = t3[e2], o2 = t3[r2];
                if (null == this.modules[n2][o2])
                  for (var i2 = -2; i2 <= 2; i2++)
                    for (var a2 = -2; a2 <= 2; a2++)
                      this.modules[n2 + i2][o2 + a2] = -2 == i2 || 2 == i2 || -2 == a2 || 2 == a2 || 0 == i2 && 0 == a2;
              }
          } }, { key: "setupTypeNumber", value: function(t3) {
            for (var e2 = p.getBCHTypeNumber(this.typeNumber), r2 = 0; r2 < 18; r2++) {
              var n2 = !t3 && 1 == (e2 >> r2 & 1);
              this.modules[Math.floor(r2 / 3)][r2 % 3 + this.moduleCount - 8 - 3] = n2;
            }
            for (r2 = 0; r2 < 18; r2++) {
              n2 = !t3 && 1 == (e2 >> r2 & 1);
              this.modules[r2 % 3 + this.moduleCount - 8 - 3][Math.floor(r2 / 3)] = n2;
            }
          } }, { key: "setupTypeInfo", value: function(t3, e2) {
            for (var r2 = this.errorCorrectLevel << 3 | e2, n2 = p.getBCHTypeInfo(r2), o2 = 0; o2 < 15; o2++) {
              var i2 = !t3 && 1 == (n2 >> o2 & 1);
              o2 < 6 ? this.modules[o2][8] = i2 : o2 < 8 ? this.modules[o2 + 1][8] = i2 : this.modules[this.moduleCount - 15 + o2][8] = i2;
            }
            for (o2 = 0; o2 < 15; o2++) {
              i2 = !t3 && 1 == (n2 >> o2 & 1);
              o2 < 8 ? this.modules[8][this.moduleCount - o2 - 1] = i2 : o2 < 9 ? this.modules[8][15 - o2 - 1 + 1] = i2 : this.modules[8][15 - o2 - 1] = i2;
            }
            this.modules[this.moduleCount - 8][8] = !t3;
          } }, { key: "mapData", value: function(t3, e2) {
            for (var r2 = -1, n2 = this.moduleCount - 1, o2 = 7, i2 = 0, a2 = this.moduleCount - 1; a2 > 0; a2 -= 2)
              for (6 == a2 && a2--; ; ) {
                for (var s2 = 0; s2 < 2; s2++)
                  if (null == this.modules[n2][a2 - s2]) {
                    var u2 = false;
                    i2 < t3.length && (u2 = 1 == (t3[i2] >>> o2 & 1)), p.getMask(e2, n2, a2 - s2) && (u2 = !u2), this.modules[n2][a2 - s2] = u2, -1 == --o2 && (i2++, o2 = 7);
                  }
                if ((n2 += r2) < 0 || this.moduleCount <= n2) {
                  n2 -= r2, r2 = -r2;
                  break;
                }
              }
          } }], [{ key: "createData", value: function(e2, r2, n2) {
            for (var o2 = y.getRSBlocks(e2, r2), i2 = new v(), a2 = 0; a2 < n2.length; a2++) {
              var s2 = n2[a2];
              i2.put(s2.mode, 4), i2.put(s2.getLength(), p.getLengthInBits(s2.mode, e2)), s2.write(i2);
            }
            var u2 = 0;
            for (a2 = 0; a2 < o2.length; a2++)
              u2 += o2[a2].dataCount;
            if (i2.getLengthInBits() > 8 * u2)
              throw new Error("code length overflow. (".concat(i2.getLengthInBits(), ">").concat(8 * u2, ")"));
            for (i2.getLengthInBits() + 4 <= 8 * u2 && i2.put(0, 4); i2.getLengthInBits() % 8 != 0; )
              i2.putBit(false);
            for (; !(i2.getLengthInBits() >= 8 * u2 || (i2.put(t2.PAD0, 8), i2.getLengthInBits() >= 8 * u2)); )
              i2.put(t2.PAD1, 8);
            return t2.createBytes(i2, o2);
          } }, { key: "createBytes", value: function(t3, e2) {
            for (var r2 = 0, n2 = 0, o2 = 0, i2 = new Array(e2.length), a2 = new Array(e2.length), s2 = 0; s2 < e2.length; s2++) {
              var u2 = e2[s2].dataCount, l2 = e2[s2].totalCount - u2;
              n2 = Math.max(n2, u2), o2 = Math.max(o2, l2), i2[s2] = new Array(u2);
              for (var c2 = 0; c2 < i2[s2].length; c2++)
                i2[s2][c2] = 255 & t3.buffer[c2 + r2];
              r2 += u2;
              var h2 = p.getErrorCorrectPolynomial(l2), f2 = new d(i2[s2], h2.getLength() - 1).mod(h2);
              a2[s2] = new Array(h2.getLength() - 1);
              for (c2 = 0; c2 < a2[s2].length; c2++) {
                var g2 = c2 + f2.getLength() - a2[s2].length;
                a2[s2][c2] = g2 >= 0 ? f2.get(g2) : 0;
              }
            }
            var y2 = 0;
            for (c2 = 0; c2 < e2.length; c2++)
              y2 += e2[c2].totalCount;
            var v2 = new Array(y2), m2 = 0;
            for (c2 = 0; c2 < n2; c2++)
              for (s2 = 0; s2 < e2.length; s2++)
                c2 < i2[s2].length && (v2[m2++] = i2[s2][c2]);
            for (c2 = 0; c2 < o2; c2++)
              for (s2 = 0; s2 < e2.length; s2++)
                c2 < a2[s2].length && (v2[m2++] = a2[s2][c2]);
            return v2;
          } }]), t2;
        }();
        l.PAD0 = 236, l.PAD1 = 17;
        var c = { L: 1, M: 0, Q: 3, H: 2 }, h = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }, f = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }, p = function() {
          function t2() {
            o()(this, t2);
          }
          return a()(t2, null, [{ key: "getBCHTypeInfo", value: function(e2) {
            for (var r2 = e2 << 10; t2.getBCHDigit(r2) - t2.getBCHDigit(t2.G15) >= 0; )
              r2 ^= t2.G15 << t2.getBCHDigit(r2) - t2.getBCHDigit(t2.G15);
            return (e2 << 10 | r2) ^ t2.G15_MASK;
          } }, { key: "getBCHTypeNumber", value: function(e2) {
            for (var r2 = e2 << 12; t2.getBCHDigit(r2) - t2.getBCHDigit(t2.G18) >= 0; )
              r2 ^= t2.G18 << t2.getBCHDigit(r2) - t2.getBCHDigit(t2.G18);
            return e2 << 12 | r2;
          } }, { key: "getBCHDigit", value: function(t3) {
            for (var e2 = 0; 0 != t3; )
              e2++, t3 >>>= 1;
            return e2;
          } }, { key: "getPatternPosition", value: function(e2) {
            return t2.PATTERN_POSITION_TABLE[e2 - 1];
          } }, { key: "getMask", value: function(t3, e2, r2) {
            switch (t3) {
              case f.PATTERN000:
                return (e2 + r2) % 2 == 0;
              case f.PATTERN001:
                return e2 % 2 == 0;
              case f.PATTERN010:
                return r2 % 3 == 0;
              case f.PATTERN011:
                return (e2 + r2) % 3 == 0;
              case f.PATTERN100:
                return (Math.floor(e2 / 2) + Math.floor(r2 / 3)) % 2 == 0;
              case f.PATTERN101:
                return e2 * r2 % 2 + e2 * r2 % 3 == 0;
              case f.PATTERN110:
                return (e2 * r2 % 2 + e2 * r2 % 3) % 2 == 0;
              case f.PATTERN111:
                return (e2 * r2 % 3 + (e2 + r2) % 2) % 2 == 0;
              default:
                throw new Error("bad maskPattern:".concat(t3));
            }
          } }, { key: "getErrorCorrectPolynomial", value: function(t3) {
            for (var e2 = new d([1], 0), r2 = 0; r2 < t3; r2++)
              e2 = e2.multiply(new d([1, g.gexp(r2)], 0));
            return e2;
          } }, { key: "getLengthInBits", value: function(t3, e2) {
            if (1 <= e2 && e2 < 10)
              switch (t3) {
                case h.MODE_NUMBER:
                  return 10;
                case h.MODE_ALPHA_NUM:
                  return 9;
                case h.MODE_8BIT_BYTE:
                case h.MODE_KANJI:
                  return 8;
                default:
                  throw new Error("mode:".concat(t3));
              }
            else if (e2 < 27)
              switch (t3) {
                case h.MODE_NUMBER:
                  return 12;
                case h.MODE_ALPHA_NUM:
                  return 11;
                case h.MODE_8BIT_BYTE:
                  return 16;
                case h.MODE_KANJI:
                  return 10;
                default:
                  throw new Error("mode:".concat(t3));
              }
            else {
              if (!(e2 < 41))
                throw new Error("type:".concat(e2));
              switch (t3) {
                case h.MODE_NUMBER:
                  return 14;
                case h.MODE_ALPHA_NUM:
                  return 13;
                case h.MODE_8BIT_BYTE:
                  return 16;
                case h.MODE_KANJI:
                  return 12;
                default:
                  throw new Error("mode:".concat(t3));
              }
            }
          } }, { key: "getLostPoint", value: function(t3) {
            for (var e2 = t3.getModuleCount(), r2 = 0, n2 = 0; n2 < e2; n2++)
              for (var o2 = 0; o2 < e2; o2++) {
                for (var i2 = 0, a2 = t3.isDark(n2, o2), s2 = -1; s2 <= 1; s2++)
                  if (!(n2 + s2 < 0 || e2 <= n2 + s2))
                    for (var u2 = -1; u2 <= 1; u2++)
                      o2 + u2 < 0 || e2 <= o2 + u2 || 0 == s2 && 0 == u2 || a2 == t3.isDark(n2 + s2, o2 + u2) && i2++;
                i2 > 5 && (r2 += 3 + i2 - 5);
              }
            for (n2 = 0; n2 < e2 - 1; n2++)
              for (o2 = 0; o2 < e2 - 1; o2++) {
                var l2 = 0;
                t3.isDark(n2, o2) && l2++, t3.isDark(n2 + 1, o2) && l2++, t3.isDark(n2, o2 + 1) && l2++, t3.isDark(n2 + 1, o2 + 1) && l2++, 0 != l2 && 4 != l2 || (r2 += 3);
              }
            for (n2 = 0; n2 < e2; n2++)
              for (o2 = 0; o2 < e2 - 6; o2++)
                t3.isDark(n2, o2) && !t3.isDark(n2, o2 + 1) && t3.isDark(n2, o2 + 2) && t3.isDark(n2, o2 + 3) && t3.isDark(n2, o2 + 4) && !t3.isDark(n2, o2 + 5) && t3.isDark(n2, o2 + 6) && (r2 += 40);
            for (o2 = 0; o2 < e2; o2++)
              for (n2 = 0; n2 < e2 - 6; n2++)
                t3.isDark(n2, o2) && !t3.isDark(n2 + 1, o2) && t3.isDark(n2 + 2, o2) && t3.isDark(n2 + 3, o2) && t3.isDark(n2 + 4, o2) && !t3.isDark(n2 + 5, o2) && t3.isDark(n2 + 6, o2) && (r2 += 40);
            var c2 = 0;
            for (o2 = 0; o2 < e2; o2++)
              for (n2 = 0; n2 < e2; n2++)
                t3.isDark(n2, o2) && c2++;
            return r2 += 10 * (Math.abs(100 * c2 / e2 / e2 - 50) / 5);
          } }]), t2;
        }();
        p.PATTERN_POSITION_TABLE = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], p.G15 = 1335, p.G18 = 7973, p.G15_MASK = 21522;
        var g = function() {
          function t2() {
            o()(this, t2);
          }
          return a()(t2, null, [{ key: "glog", value: function(e2) {
            if (e2 < 1)
              throw new Error("glog(".concat(e2, ")"));
            return t2.LOG_TABLE[e2];
          } }, { key: "gexp", value: function(e2) {
            for (; e2 < 0; )
              e2 += 255;
            for (; e2 >= 256; )
              e2 -= 255;
            return t2.EXP_TABLE[e2];
          } }]), t2;
        }();
        g.EXP_TABLE = new Array(256), g.LOG_TABLE = new Array(256), g._constructor = function() {
          for (var t2 = 0; t2 < 8; t2++)
            g.EXP_TABLE[t2] = 1 << t2;
          for (t2 = 8; t2 < 256; t2++)
            g.EXP_TABLE[t2] = g.EXP_TABLE[t2 - 4] ^ g.EXP_TABLE[t2 - 5] ^ g.EXP_TABLE[t2 - 6] ^ g.EXP_TABLE[t2 - 8];
          for (t2 = 0; t2 < 255; t2++)
            g.LOG_TABLE[g.EXP_TABLE[t2]] = t2;
        }();
        var d = function() {
          function t2(e2, r2) {
            if (o()(this, t2), null == e2.length)
              throw new Error("".concat(e2.length, "/").concat(r2));
            for (var n2 = 0; n2 < e2.length && 0 == e2[n2]; )
              n2++;
            this.num = new Array(e2.length - n2 + r2);
            for (var i2 = 0; i2 < e2.length - n2; i2++)
              this.num[i2] = e2[i2 + n2];
          }
          return a()(t2, [{ key: "get", value: function(t3) {
            return this.num[t3];
          } }, { key: "getLength", value: function() {
            return this.num.length;
          } }, { key: "multiply", value: function(e2) {
            for (var r2 = new Array(this.getLength() + e2.getLength() - 1), n2 = 0; n2 < this.getLength(); n2++)
              for (var o2 = 0; o2 < e2.getLength(); o2++)
                r2[n2 + o2] ^= g.gexp(g.glog(this.get(n2)) + g.glog(e2.get(o2)));
            return new t2(r2, 0);
          } }, { key: "mod", value: function(e2) {
            if (this.getLength() - e2.getLength() < 0)
              return this;
            for (var r2 = g.glog(this.get(0)) - g.glog(e2.get(0)), n2 = new Array(this.getLength()), o2 = 0; o2 < this.getLength(); o2++)
              n2[o2] = this.get(o2);
            for (o2 = 0; o2 < e2.getLength(); o2++)
              n2[o2] ^= g.gexp(g.glog(e2.get(o2)) + r2);
            return new t2(n2, 0).mod(e2);
          } }]), t2;
        }(), y = function() {
          function t2(e2, r2) {
            o()(this, t2), this.totalCount = e2, this.dataCount = r2;
          }
          return a()(t2, null, [{ key: "getRSBlocks", value: function(e2, r2) {
            var n2 = t2.getRsBlockTable(e2, r2);
            if (null == n2)
              throw new Error("bad rs block @ typeNumber:".concat(e2, "/errorCorrectLevel:").concat(r2));
            for (var o2 = n2.length / 3, i2 = [], a2 = 0; a2 < o2; a2++)
              for (var s2 = n2[3 * a2 + 0], u2 = n2[3 * a2 + 1], l2 = n2[3 * a2 + 2], c2 = 0; c2 < s2; c2++)
                i2.push(new t2(u2, l2));
            return i2;
          } }, { key: "getRsBlockTable", value: function(e2, r2) {
            switch (r2) {
              case c.L:
                return t2.RS_BLOCK_TABLE[4 * (e2 - 1) + 0];
              case c.M:
                return t2.RS_BLOCK_TABLE[4 * (e2 - 1) + 1];
              case c.Q:
                return t2.RS_BLOCK_TABLE[4 * (e2 - 1) + 2];
              case c.H:
                return t2.RS_BLOCK_TABLE[4 * (e2 - 1) + 3];
              default:
                return;
            }
          } }]), t2;
        }();
        y.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
        var v = function() {
          function t2() {
            o()(this, t2), this.buffer = [], this.length = 0;
          }
          return a()(t2, [{ key: "get", value: function(t3) {
            var e2 = Math.floor(t3 / 8);
            return 1 == (this.buffer[e2] >>> 7 - t3 % 8 & 1);
          } }, { key: "put", value: function(t3, e2) {
            for (var r2 = 0; r2 < e2; r2++)
              this.putBit(1 == (t3 >>> e2 - r2 - 1 & 1));
          } }, { key: "getLengthInBits", value: function() {
            return this.length;
          } }, { key: "putBit", value: function(t3) {
            var e2 = Math.floor(this.length / 8);
            this.buffer.length <= e2 && this.buffer.push(0), t3 && (this.buffer[e2] |= 128 >>> this.length % 8), this.length++;
          } }]), t2;
        }(), m = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
      }, function(t, e, r) {
        "use strict";
        (function(t2) {
          r.d(e, "b", function() {
            return u;
          }), r.d(e, "a", function() {
            return l;
          });
          var n = r(2), o = r.n(n);
          function i(t3) {
            if ("string" != typeof t3)
              throw new TypeError("Path must be a string. Received " + JSON.stringify(t3));
          }
          function a(t3, e2) {
            for (var r2, n2 = "", o2 = 0, i2 = -1, a2 = 0, s2 = 0; s2 <= t3.length; ++s2) {
              if (s2 < t3.length)
                r2 = t3.charCodeAt(s2);
              else {
                if (47 === r2)
                  break;
                r2 = 47;
              }
              if (47 === r2) {
                if (i2 === s2 - 1 || 1 === a2)
                  ;
                else if (i2 !== s2 - 1 && 2 === a2) {
                  if (n2.length < 2 || 2 !== o2 || 46 !== n2.charCodeAt(n2.length - 1) || 46 !== n2.charCodeAt(n2.length - 2)) {
                    if (n2.length > 2) {
                      var u2 = n2.lastIndexOf("/");
                      if (u2 !== n2.length - 1) {
                        -1 === u2 ? (n2 = "", o2 = 0) : o2 = (n2 = n2.slice(0, u2)).length - 1 - n2.lastIndexOf("/"), i2 = s2, a2 = 0;
                        continue;
                      }
                    } else if (2 === n2.length || 1 === n2.length) {
                      n2 = "", o2 = 0, i2 = s2, a2 = 0;
                      continue;
                    }
                  }
                  e2 && (n2.length > 0 ? n2 += "/.." : n2 = "..", o2 = 2);
                } else
                  n2.length > 0 ? n2 += "/" + t3.slice(i2 + 1, s2) : n2 = t3.slice(i2 + 1, s2), o2 = s2 - i2 - 1;
                i2 = s2, a2 = 0;
              } else
                46 === r2 && -1 !== a2 ? ++a2 : a2 = -1;
            }
            return n2;
          }
          var s = { resolve: function() {
            for (var e2, r2 = "", n2 = false, o2 = arguments.length - 1; o2 >= -1 && !n2; o2--) {
              var s2;
              o2 >= 0 ? s2 = arguments[o2] : (void 0 === e2 && (e2 = t2.cwd()), s2 = e2), i(s2), 0 !== s2.length && (r2 = s2 + "/" + r2, n2 = 47 === s2.charCodeAt(0));
            }
            return r2 = a(r2, !n2), n2 ? r2.length > 0 ? "/" + r2 : "/" : r2.length > 0 ? r2 : ".";
          }, normalize: function(t3) {
            if (i(t3), 0 === t3.length)
              return ".";
            var e2 = 47 === t3.charCodeAt(0), r2 = 47 === t3.charCodeAt(t3.length - 1);
            return 0 !== (t3 = a(t3, !e2)).length || e2 || (t3 = "."), t3.length > 0 && r2 && (t3 += "/"), e2 ? "/" + t3 : t3;
          }, isAbsolute: function(t3) {
            return i(t3), t3.length > 0 && 47 === t3.charCodeAt(0);
          }, join: function() {
            if (0 === arguments.length)
              return ".";
            for (var t3, e2 = 0; e2 < arguments.length; ++e2) {
              var r2 = arguments[e2];
              i(r2), r2.length > 0 && (void 0 === t3 ? t3 = r2 : t3 += "/" + r2);
            }
            return void 0 === t3 ? "." : s.normalize(t3);
          }, relative: function(t3, e2) {
            if (i(t3), i(e2), t3 === e2)
              return "";
            if ((t3 = s.resolve(t3)) === (e2 = s.resolve(e2)))
              return "";
            for (var r2 = 1; r2 < t3.length && 47 === t3.charCodeAt(r2); ++r2)
              ;
            for (var n2 = t3.length, o2 = n2 - r2, a2 = 1; a2 < e2.length && 47 === e2.charCodeAt(a2); ++a2)
              ;
            for (var u2 = e2.length - a2, l2 = o2 < u2 ? o2 : u2, c = -1, h = 0; h <= l2; ++h) {
              if (h === l2) {
                if (u2 > l2) {
                  if (47 === e2.charCodeAt(a2 + h))
                    return e2.slice(a2 + h + 1);
                  if (0 === h)
                    return e2.slice(a2 + h);
                } else
                  o2 > l2 && (47 === t3.charCodeAt(r2 + h) ? c = h : 0 === h && (c = 0));
                break;
              }
              var f = t3.charCodeAt(r2 + h);
              if (f !== e2.charCodeAt(a2 + h))
                break;
              47 === f && (c = h);
            }
            var p = "";
            for (h = r2 + c + 1; h <= n2; ++h)
              h !== n2 && 47 !== t3.charCodeAt(h) || (0 === p.length ? p += ".." : p += "/..");
            return p.length > 0 ? p + e2.slice(a2 + c) : (a2 += c, 47 === e2.charCodeAt(a2) && ++a2, e2.slice(a2));
          }, _makeLong: function(t3) {
            return t3;
          }, dirname: function(t3) {
            if (i(t3), 0 === t3.length)
              return ".";
            for (var e2 = t3.charCodeAt(0), r2 = 47 === e2, n2 = -1, o2 = true, a2 = t3.length - 1; a2 >= 1; --a2)
              if (47 === (e2 = t3.charCodeAt(a2))) {
                if (!o2) {
                  n2 = a2;
                  break;
                }
              } else
                o2 = false;
            return -1 === n2 ? r2 ? "/" : "." : r2 && 1 === n2 ? "//" : t3.slice(0, n2);
          }, basename: function(t3, e2) {
            if (void 0 !== e2 && "string" != typeof e2)
              throw new TypeError('"ext" argument must be a string');
            i(t3);
            var r2, n2 = 0, o2 = -1, a2 = true;
            if (void 0 !== e2 && e2.length > 0 && e2.length <= t3.length) {
              if (e2.length === t3.length && e2 === t3)
                return "";
              var s2 = e2.length - 1, u2 = -1;
              for (r2 = t3.length - 1; r2 >= 0; --r2) {
                var l2 = t3.charCodeAt(r2);
                if (47 === l2) {
                  if (!a2) {
                    n2 = r2 + 1;
                    break;
                  }
                } else
                  -1 === u2 && (a2 = false, u2 = r2 + 1), s2 >= 0 && (l2 === e2.charCodeAt(s2) ? -1 == --s2 && (o2 = r2) : (s2 = -1, o2 = u2));
              }
              return n2 === o2 ? o2 = u2 : -1 === o2 && (o2 = t3.length), t3.slice(n2, o2);
            }
            for (r2 = t3.length - 1; r2 >= 0; --r2)
              if (47 === t3.charCodeAt(r2)) {
                if (!a2) {
                  n2 = r2 + 1;
                  break;
                }
              } else
                -1 === o2 && (a2 = false, o2 = r2 + 1);
            return -1 === o2 ? "" : t3.slice(n2, o2);
          }, extname: function(t3) {
            i(t3);
            for (var e2 = -1, r2 = 0, n2 = -1, o2 = true, a2 = 0, s2 = t3.length - 1; s2 >= 0; --s2) {
              var u2 = t3.charCodeAt(s2);
              if (47 !== u2)
                -1 === n2 && (o2 = false, n2 = s2 + 1), 46 === u2 ? -1 === e2 ? e2 = s2 : 1 !== a2 && (a2 = 1) : -1 !== e2 && (a2 = -1);
              else if (!o2) {
                r2 = s2 + 1;
                break;
              }
            }
            return -1 === e2 || -1 === n2 || 0 === a2 || 1 === a2 && e2 === n2 - 1 && e2 === r2 + 1 ? "" : t3.slice(e2, n2);
          }, format: function(t3) {
            if (null === t3 || "object" !== o()(t3))
              throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + o()(t3));
            return function(t4, e2) {
              var r2 = e2.dir || e2.root, n2 = e2.base || (e2.name || "") + (e2.ext || "");
              return r2 ? r2 === e2.root ? r2 + n2 : r2 + t4 + n2 : n2;
            }("/", t3);
          }, parse: function(t3) {
            i(t3);
            var e2 = { root: "", dir: "", base: "", ext: "", name: "" };
            if (0 === t3.length)
              return e2;
            var r2, n2 = t3.charCodeAt(0), o2 = 47 === n2;
            o2 ? (e2.root = "/", r2 = 1) : r2 = 0;
            for (var a2 = -1, s2 = 0, u2 = -1, l2 = true, c = t3.length - 1, h = 0; c >= r2; --c)
              if (47 !== (n2 = t3.charCodeAt(c)))
                -1 === u2 && (l2 = false, u2 = c + 1), 46 === n2 ? -1 === a2 ? a2 = c : 1 !== h && (h = 1) : -1 !== a2 && (h = -1);
              else if (!l2) {
                s2 = c + 1;
                break;
              }
            return -1 === a2 || -1 === u2 || 0 === h || 1 === h && a2 === u2 - 1 && a2 === s2 + 1 ? -1 !== u2 && (e2.base = e2.name = 0 === s2 && o2 ? t3.slice(1, u2) : t3.slice(s2, u2)) : (0 === s2 && o2 ? (e2.name = t3.slice(1, a2), e2.base = t3.slice(1, u2)) : (e2.name = t3.slice(s2, a2), e2.base = t3.slice(s2, u2)), e2.ext = t3.slice(a2, u2)), s2 > 0 ? e2.dir = t3.slice(0, s2 - 1) : o2 && (e2.dir = "/"), e2;
          }, sep: "/", delimiter: ":", win32: null, posix: null };
          s.posix = s;
          var u = s.extname, l = s.basename;
        }).call(this, r(19));
      }, function(t, e) {
        function r(t2, e2, r2, n, o, i, a) {
          try {
            var s = t2[i](a), u = s.value;
          } catch (t3) {
            return void r2(t3);
          }
          s.done ? e2(u) : Promise.resolve(u).then(n, o);
        }
        t.exports = function(t2) {
          return function() {
            var e2 = this, n = arguments;
            return new Promise(function(o, i) {
              var a = t2.apply(e2, n);
              function s(t3) {
                r(a, o, i, s, u, "next", t3);
              }
              function u(t3) {
                r(a, o, i, s, u, "throw", t3);
              }
              s(void 0);
            });
          };
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, r) {
        "use strict";
        r.d(e, "b", function() {
          return w;
        }), r.d(e, "a", function() {
          return x;
        });
        const n = (t2, e2, r2 = {}, o2 = r2) => {
          if (Array.isArray(e2))
            e2.forEach((e3) => n(t2, e3, r2, o2));
          else if ("function" == typeof e2)
            e2(t2, r2, o2, n);
          else {
            const i2 = Object.keys(e2)[0];
            Array.isArray(e2[i2]) ? (o2[i2] = {}, n(t2, e2[i2], r2, o2[i2])) : o2[i2] = e2[i2](t2, r2, o2, n);
          }
          return r2;
        }, o = (t2, e2) => (r2, n2, o2, i2) => {
          e2(r2, n2, o2) && i2(r2, t2, n2, o2);
        }, i = (t2 = 0) => (e2) => e2.data[e2.pos + t2], a = (t2) => (e2) => e2.data.subarray(e2.pos, e2.pos += t2), s = (t2) => (e2) => e2.data.subarray(e2.pos, e2.pos + t2), u = (t2) => (e2) => Array.from(a(t2)(e2)).map((t3) => String.fromCharCode(t3)).join(""), l = (t2) => (e2) => {
          const r2 = a(2)(e2);
          return t2 ? (r2[1] << 8) + r2[0] : (r2[0] << 8) + r2[1];
        }, c = (t2, e2) => (r2, n2, o2) => {
          const i2 = "function" == typeof e2 ? e2(r2, n2, o2) : e2, s2 = a(t2), u2 = new Array(i2);
          for (var l2 = 0; l2 < i2; l2++)
            u2[l2] = s2(r2);
          return u2;
        }, h = (t2) => (e2) => {
          const r2 = ((t3) => t3.data[t3.pos++])(e2), n2 = new Array(8);
          for (var o2 = 0; o2 < 8; o2++)
            n2[7 - o2] = !!(r2 & 1 << o2);
          return Object.keys(t2).reduce((e3, r3) => {
            const o3 = t2[r3];
            return o3.length ? e3[r3] = ((t3, e4, r4) => {
              for (var n3 = 0, o4 = 0; o4 < r4; o4++)
                n3 += t3[e4 + o4] && 2 ** (r4 - o4 - 1);
              return n3;
            })(n2, o3.index, o3.length) : e3[r3] = n2[o3.index], e3;
          }, {});
        };
        var f = { blocks: (t2) => {
          const e2 = [], r2 = t2.data.length;
          for (var n2 = 0, o2 = ((t3) => t3.data[t3.pos++])(t2); 0 !== o2 && o2; o2 = ((t3) => t3.data[t3.pos++])(t2)) {
            if (t2.pos + o2 >= r2) {
              const o3 = r2 - t2.pos;
              e2.push(a(o3)(t2)), n2 += o3;
              break;
            }
            e2.push(a(o2)(t2)), n2 += o2;
          }
          const i2 = new Uint8Array(n2);
          for (var s2 = 0, u2 = 0; u2 < e2.length; u2++)
            i2.set(e2[u2], s2), s2 += e2[u2].length;
          return i2;
        } };
        const p = o({ gce: [{ codes: a(2) }, { byteSize: (t2) => t2.data[t2.pos++] }, { extras: h({ future: { index: 0, length: 3 }, disposal: { index: 3, length: 3 }, userInput: { index: 6 }, transparentColorGiven: { index: 7 } }) }, { delay: l(true) }, { transparentColorIndex: (t2) => t2.data[t2.pos++] }, { terminator: (t2) => t2.data[t2.pos++] }] }, (t2) => {
          var e2 = s(2)(t2);
          return 33 === e2[0] && 249 === e2[1];
        }), g = o({ image: [{ code: (t2) => t2.data[t2.pos++] }, { descriptor: [{ left: l(true) }, { top: l(true) }, { width: l(true) }, { height: l(true) }, { lct: h({ exists: { index: 0 }, interlaced: { index: 1 }, sort: { index: 2 }, future: { index: 3, length: 2 }, size: { index: 5, length: 3 } }) }] }, o({ lct: c(3, (t2, e2, r2) => Math.pow(2, r2.descriptor.lct.size + 1)) }, (t2, e2, r2) => r2.descriptor.lct.exists), { data: [{ minCodeSize: (t2) => t2.data[t2.pos++] }, f] }] }, (t2) => 44 === i()(t2)), d = o({ text: [{ codes: a(2) }, { blockSize: (t2) => t2.data[t2.pos++] }, { preData: (t2, e2, r2) => a(r2.text.blockSize)(t2) }, f] }, (t2) => {
          var e2 = s(2)(t2);
          return 33 === e2[0] && 1 === e2[1];
        }), y = o({ application: [{ codes: a(2) }, { blockSize: (t2) => t2.data[t2.pos++] }, { id: (t2, e2, r2) => u(r2.blockSize)(t2) }, f] }, (t2) => {
          var e2 = s(2)(t2);
          return 33 === e2[0] && 255 === e2[1];
        }), v = o({ comment: [{ codes: a(2) }, f] }, (t2) => {
          var e2 = s(2)(t2);
          return 33 === e2[0] && 254 === e2[1];
        });
        var m = [{ header: [{ signature: u(3) }, { version: u(3) }] }, { lsd: [{ width: l(true) }, { height: l(true) }, { gct: h({ exists: { index: 0 }, resolution: { index: 1, length: 3 }, sort: { index: 4 }, size: { index: 5, length: 3 } }) }, { backgroundColorIndex: (t2) => t2.data[t2.pos++] }, { pixelAspectRatio: (t2) => t2.data[t2.pos++] }] }, o({ gct: c(3, (t2, e2) => Math.pow(2, e2.lsd.gct.size + 1)) }, (t2, e2) => e2.lsd.gct.exists), { frames: ((t2, e2) => (r2, n2, o2, i2) => {
          const a2 = [];
          let s2 = r2.pos;
          for (; e2(r2, n2, o2); ) {
            const e3 = {};
            if (i2(r2, t2, n2, e3), r2.pos === s2)
              break;
            s2 = r2.pos, a2.push(e3);
          }
          return a2;
        })([p, y, v, g, d], (t2) => {
          var e2 = i()(t2);
          return 33 === e2 || 44 === e2;
        }) }], w = function(t2) {
          var e2 = new Uint8Array(t2);
          return n({ data: e2, pos: 0 }, m);
        }, b = function(t2, e2, r2) {
          if (t2.image) {
            var n2 = t2.image, o2 = n2.descriptor.width * n2.descriptor.height, i2 = function(t3, e3, r3) {
              var n3, o3, i3, a3, s2, u2, l2, c2, h2, f2, p2, g2, d2, y2, v2, m2, w2 = r3, b2 = new Array(r3), x2 = new Array(4096), A = new Array(4096), E = new Array(4097);
              for (s2 = (o3 = 1 << (f2 = t3)) + 1, n3 = o3 + 2, l2 = -1, i3 = (1 << (a3 = f2 + 1)) - 1, c2 = 0; c2 < o3; c2++)
                x2[c2] = 0, A[c2] = c2;
              for (p2 = g2 = d2 = y2 = v2 = m2 = 0, h2 = 0; h2 < w2; ) {
                if (0 === y2) {
                  if (g2 < a3) {
                    p2 += e3[m2] << g2, g2 += 8, m2++;
                    continue;
                  }
                  if (c2 = p2 & i3, p2 >>= a3, g2 -= a3, c2 > n3 || c2 == s2)
                    break;
                  if (c2 == o3) {
                    i3 = (1 << (a3 = f2 + 1)) - 1, n3 = o3 + 2, l2 = -1;
                    continue;
                  }
                  if (-1 == l2) {
                    E[y2++] = A[c2], l2 = c2, d2 = c2;
                    continue;
                  }
                  for (u2 = c2, c2 == n3 && (E[y2++] = d2, c2 = l2); c2 > o3; )
                    E[y2++] = A[c2], c2 = x2[c2];
                  d2 = 255 & A[c2], E[y2++] = d2, n3 < 4096 && (x2[n3] = l2, A[n3] = d2, 0 == (++n3 & i3) && n3 < 4096 && (a3++, i3 += n3)), l2 = u2;
                }
                y2--, b2[v2++] = E[y2], h2++;
              }
              for (h2 = v2; h2 < w2; h2++)
                b2[h2] = 0;
              return b2;
            }(n2.data.minCodeSize, n2.data.blocks, o2);
            n2.descriptor.lct.interlaced && (i2 = function(t3, e3) {
              for (var r3 = new Array(t3.length), n3 = t3.length / e3, o3 = function(n4, o4) {
                var i4 = t3.slice(o4 * e3, (o4 + 1) * e3);
                r3.splice.apply(r3, [n4 * e3, e3].concat(i4));
              }, i3 = [0, 4, 2, 1], a3 = [8, 8, 4, 2], s2 = 0, u2 = 0; u2 < 4; u2++)
                for (var l2 = i3[u2]; l2 < n3; l2 += a3[u2])
                  o3(l2, s2), s2++;
              return r3;
            }(i2, n2.descriptor.width));
            var a2 = { pixels: i2, dims: { top: t2.image.descriptor.top, left: t2.image.descriptor.left, width: t2.image.descriptor.width, height: t2.image.descriptor.height } };
            return n2.descriptor.lct && n2.descriptor.lct.exists ? a2.colorTable = n2.lct : a2.colorTable = e2, t2.gce && (a2.delay = 10 * (t2.gce.delay || 10), a2.disposalType = t2.gce.extras.disposal, t2.gce.extras.transparentColorGiven && (a2.transparentIndex = t2.gce.transparentColorIndex)), r2 && (a2.patch = function(t3) {
              for (var e3 = t3.pixels.length, r3 = new Uint8ClampedArray(4 * e3), n3 = 0; n3 < e3; n3++) {
                var o3 = 4 * n3, i3 = t3.pixels[n3], a3 = t3.colorTable[i3];
                r3[o3] = a3[0], r3[o3 + 1] = a3[1], r3[o3 + 2] = a3[2], r3[o3 + 3] = i3 !== t3.transparentIndex ? 255 : 0;
              }
              return r3;
            }(a2)), a2;
          }
          console.warn("gif frame does not have associated image.");
        }, x = function(t2, e2) {
          return t2.frames.filter(function(t3) {
            return t3.image;
          }).map(function(r2) {
            return b(r2, t2.gct, e2);
          });
        };
      }, function(t, e) {
        var r;
        r = function() {
          return this;
        }();
        try {
          r = r || new Function("return this")();
        } catch (t2) {
          "object" == typeof window && (r = window);
        }
        t.exports = r;
      }, function(t, e, r) {
        "use strict";
        (function(t2) {
          r.d(e, "a", function() {
            return m;
          });
          var n = r(2), o = r.n(n), i = r(0), a = r.n(i), s = r(1), u = r.n(s), l = r(3), c = r.n(l), h = r(10), f = r(7), p = r(4), g = r(12), d = function(t3, e2, r2, n2) {
            return new (r2 || (r2 = Promise))(function(o2, i2) {
              function a2(t4) {
                try {
                  u2(n2.next(t4));
                } catch (t5) {
                  i2(t5);
                }
              }
              function s2(t4) {
                try {
                  u2(n2.throw(t4));
                } catch (t5) {
                  i2(t5);
                }
              }
              function u2(t4) {
                var e3;
                t4.done ? o2(t4.value) : (e3 = t4.value, e3 instanceof r2 ? e3 : new r2(function(t5) {
                  t5(e3);
                })).then(a2, s2);
              }
              u2((n2 = n2.apply(t3, e2 || [])).next());
            });
          }, y = h.a.Canvas;
          function v(t3) {
            if (t3)
              return new Promise(function(r2, n2) {
                if ("data" == t3.slice(0, 4)) {
                  var o2 = new Image();
                  return o2.onload = function() {
                    r2(o2), e2(o2);
                  }, o2.onerror = function() {
                    n2("Image load error"), e2(o2);
                  }, void (o2.src = t3);
                }
                var i2 = new Image();
                i2.setAttribute("crossOrigin", "Anonymous"), i2.onload = function() {
                  r2(i2);
                }, i2.onerror = function() {
                  n2("Image load error");
                }, i2.src = t3;
              });
            function e2(t4) {
              t4.onload = null, t4.onerror = null;
            }
          }
          var m = function() {
            function e2(t3) {
              a()(this, e2);
              var r2 = Object.assign({}, t3);
              if (Object.keys(e2.defaultOptions).forEach(function(t4) {
                t4 in r2 || Object.defineProperty(r2, t4, { value: e2.defaultOptions[t4], enumerable: true, writable: true });
              }), r2.components ? "object" === o()(r2.components) && Object.keys(e2.defaultComponentOptions).forEach(function(t4) {
                t4 in r2.components ? Object.defineProperty(r2.components, t4, { value: Object.assign(Object.assign({}, e2.defaultComponentOptions[t4]), r2.components[t4]), enumerable: true, writable: true }) : Object.defineProperty(r2.components, t4, { value: e2.defaultComponentOptions[t4], enumerable: true, writable: true });
              }) : r2.components = e2.defaultComponentOptions, null !== r2.dotScale && void 0 !== r2.dotScale) {
                if (r2.dotScale <= 0 || r2.dotScale > 1)
                  throw new Error("dotScale should be in range (0, 1].");
                r2.components.data.scale = r2.dotScale, r2.components.timing.scale = r2.dotScale, r2.components.alignment.scale = r2.dotScale;
              }
              this.options = r2, this.canvas = new y(t3.size, t3.size), this.canvasContext = this.canvas.getContext("2d"), this.qrCode = new p.a(-1, this.options.correctLevel), Number.isInteger(this.options.maskPattern) && (this.qrCode.maskPattern = this.options.maskPattern), Number.isInteger(this.options.version) && (this.qrCode.typeNumber = this.options.version), this.qrCode.addData(this.options.text), this.qrCode.make();
            }
            return u()(e2, [{ key: "draw", value: function() {
              var t3 = this;
              return new Promise(function(e3) {
                return t3._draw().then(e3);
              });
            } }, { key: "_clear", value: function() {
              this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
            } }, { key: "_draw", value: function() {
              var r2, n2, o2, i2, a2, s2, u2, l2, h2, m2, b, x, A, E, C, k, P, _, T;
              return d(this, void 0, void 0, c.a.mark(function d2() {
                var B, R, S, D, L, M, I, O, U, N, j, F, Y, z, G, H, q, $, X, Q, K, V, J, Z, W, tt, et, rt, nt, ot, it, at, st, ut, lt, ct, ht, ft, pt, gt, dt, yt, vt, mt, wt, bt, xt, At, Et, Ct, kt, Pt, _t, Tt, Bt, Rt, St, Dt, Lt, Mt, It, Ot, Ut, Nt, jt, Ft, Yt, zt, Gt, Ht, qt, $t;
                return c.a.wrap(function(c2) {
                  for (; ; )
                    switch (c2.prev = c2.next) {
                      case 0:
                        if (B = null === (r2 = this.qrCode) || void 0 === r2 ? void 0 : r2.moduleCount, R = this.options.size, ((S = this.options.margin) < 0 || 2 * S >= R) && (S = 0), D = Math.ceil(S), L = R - 2 * S, M = this.options.whiteMargin, I = this.options.backgroundDimming, O = Math.ceil(L / B), j = new y(N = (U = O * B) + 2 * D, N), F = j.getContext("2d"), this._clear(), F.save(), F.translate(D, D), Y = new y(N, N), z = Y.getContext("2d"), G = null, H = [], !this.options.gifBackground) {
                          c2.next = 47;
                          break;
                        }
                        if (q = Object(f.b)(this.options.gifBackground), G = q, H = Object(f.a)(q, true), !this.options.autoColor) {
                          c2.next = 45;
                          break;
                        }
                        $ = 0, X = 0, Q = 0, K = 0, V = 0;
                      case 28:
                        if (!(V < H[0].colorTable.length)) {
                          c2.next = 41;
                          break;
                        }
                        if (!((J = H[0].colorTable[V])[0] > 200 || J[1] > 200 || J[2] > 200)) {
                          c2.next = 32;
                          break;
                        }
                        return c2.abrupt("continue", 38);
                      case 32:
                        if (0 !== J[0] || 0 !== J[1] || 0 !== J[2]) {
                          c2.next = 34;
                          break;
                        }
                        return c2.abrupt("continue", 38);
                      case 34:
                        K++, $ += J[0], X += J[1], Q += J[2];
                      case 38:
                        V++, c2.next = 28;
                        break;
                      case 41:
                        $ = ~~($ / K), X = ~~(X / K), Q = ~~(Q / K), this.options.colorDark = "rgb(".concat($, ",").concat(X, ",").concat(Q, ")");
                      case 45:
                        c2.next = 61;
                        break;
                      case 47:
                        if (!this.options.backgroundImage) {
                          c2.next = 58;
                          break;
                        }
                        return c2.next = 50, v(this.options.backgroundImage);
                      case 50:
                        Z = c2.sent, this.options.autoColor && (W = e2._getAverageRGB(Z), this.options.colorDark = "rgb(".concat(W.r, ",").concat(W.g, ",").concat(W.b, ")")), z.drawImage(Z, 0, 0, Z.width, Z.height, 0, 0, N, N), z.rect(0, 0, N, N), z.fillStyle = I, z.fill(), c2.next = 61;
                        break;
                      case 58:
                        z.rect(0, 0, N, N), z.fillStyle = this.options.colorLight, z.fill();
                      case 61:
                        for (tt = p.c.getPatternPosition(this.qrCode.typeNumber), et = (null === (o2 = null === (n2 = this.options.components) || void 0 === n2 ? void 0 : n2.data) || void 0 === o2 ? void 0 : o2.scale) || 0.4, rt = 0.5 * (1 - et), nt = 0; nt < B; nt++)
                          for (ot = 0; ot < B; ot++) {
                            for (it = this.qrCode.isDark(nt, ot), at = 6 == nt && ot >= 8 && ot <= B - 8 || 6 == ot && nt >= 8 && nt <= B - 8, st = ot < 8 && (nt < 8 || nt >= B - 8) || ot >= B - 8 && nt < 8 || at, ut = 1; ut < tt.length - 1; ut++)
                              st = st || nt >= tt[ut] - 2 && nt <= tt[ut] + 2 && ot >= tt[ut] - 2 && ot <= tt[ut] + 2;
                            lt = ot * O + (st ? 0 : rt * O), ct = nt * O + (st ? 0 : rt * O), F.strokeStyle = it ? this.options.colorDark : this.options.colorLight, F.lineWidth = 0.5, F.fillStyle = it ? this.options.colorDark : this.options.colorLight, 0 === tt.length ? st || F.fillRect(lt, ct, (st ? 1 : et) * O, (st ? 1 : et) * O) : (ht = ot < B - 4 && ot >= B - 4 - 5 && nt < B - 4 && nt >= B - 4 - 5, st || ht || F.fillRect(lt, ct, (st ? 1 : et) * O, (st ? 1 : et) * O));
                          }
                        if (ft = tt[tt.length - 1], pt = this.options.colorLight, F.fillStyle = pt, F.fillRect(0, 0, 8 * O, 8 * O), F.fillRect(0, (B - 8) * O, 8 * O, 8 * O), F.fillRect((B - 8) * O, 0, 8 * O, 8 * O), (null === (a2 = null === (i2 = this.options.components) || void 0 === i2 ? void 0 : i2.timing) || void 0 === a2 ? void 0 : a2.protectors) && (F.fillRect(8 * O, 6 * O, (B - 8 - 8) * O, O), F.fillRect(6 * O, 8 * O, O, (B - 8 - 8) * O)), (null === (u2 = null === (s2 = this.options.components) || void 0 === s2 ? void 0 : s2.cornerAlignment) || void 0 === u2 ? void 0 : u2.protectors) && e2._drawAlignProtector(F, ft, ft, O), !(null === (h2 = null === (l2 = this.options.components) || void 0 === l2 ? void 0 : l2.alignment) || void 0 === h2 ? void 0 : h2.protectors)) {
                          c2.next = 99;
                          break;
                        }
                        gt = 0;
                      case 75:
                        if (!(gt < tt.length)) {
                          c2.next = 99;
                          break;
                        }
                        dt = 0;
                      case 77:
                        if (!(dt < tt.length)) {
                          c2.next = 96;
                          break;
                        }
                        if (yt = tt[dt], vt = tt[gt], 6 !== yt || 6 !== vt && vt !== ft) {
                          c2.next = 84;
                          break;
                        }
                        return c2.abrupt("continue", 93);
                      case 84:
                        if (6 !== vt || 6 !== yt && yt !== ft) {
                          c2.next = 88;
                          break;
                        }
                        return c2.abrupt("continue", 93);
                      case 88:
                        if (yt !== ft || vt !== ft) {
                          c2.next = 92;
                          break;
                        }
                        return c2.abrupt("continue", 93);
                      case 92:
                        e2._drawAlignProtector(F, yt, vt, O);
                      case 93:
                        dt++, c2.next = 77;
                        break;
                      case 96:
                        gt++, c2.next = 75;
                        break;
                      case 99:
                        for (F.fillStyle = this.options.colorDark, F.fillRect(0, 0, 7 * O, O), F.fillRect((B - 7) * O, 0, 7 * O, O), F.fillRect(0, 6 * O, 7 * O, O), F.fillRect((B - 7) * O, 6 * O, 7 * O, O), F.fillRect(0, (B - 7) * O, 7 * O, O), F.fillRect(0, (B - 7 + 6) * O, 7 * O, O), F.fillRect(0, 0, O, 7 * O), F.fillRect(6 * O, 0, O, 7 * O), F.fillRect((B - 7) * O, 0, O, 7 * O), F.fillRect((B - 7 + 6) * O, 0, O, 7 * O), F.fillRect(0, (B - 7) * O, O, 7 * O), F.fillRect(6 * O, (B - 7) * O, O, 7 * O), F.fillRect(2 * O, 2 * O, 3 * O, 3 * O), F.fillRect((B - 7 + 2) * O, 2 * O, 3 * O, 3 * O), F.fillRect(2 * O, (B - 7 + 2) * O, 3 * O, 3 * O), mt = (null === (b = null === (m2 = this.options.components) || void 0 === m2 ? void 0 : m2.timing) || void 0 === b ? void 0 : b.scale) || 0.4, wt = 0.5 * (1 - mt), bt = 0; bt < B - 8; bt += 2)
                          e2._drawDot(F, 8 + bt, 6, O, wt, mt), e2._drawDot(F, 6, 8 + bt, O, wt, mt);
                        xt = (null === (A = null === (x = this.options.components) || void 0 === x ? void 0 : x.cornerAlignment) || void 0 === A ? void 0 : A.scale) || 0.4, At = 0.5 * (1 - xt), e2._drawAlign(F, ft, ft, O, At, xt, this.options.colorDark, (null === (C = null === (E = this.options.components) || void 0 === E ? void 0 : E.cornerAlignment) || void 0 === C ? void 0 : C.protectors) || false), Et = (null === (P = null === (k = this.options.components) || void 0 === k ? void 0 : k.alignment) || void 0 === P ? void 0 : P.scale) || 0.4, Ct = 0.5 * (1 - Et), kt = 0;
                      case 124:
                        if (!(kt < tt.length)) {
                          c2.next = 148;
                          break;
                        }
                        Pt = 0;
                      case 126:
                        if (!(Pt < tt.length)) {
                          c2.next = 145;
                          break;
                        }
                        if (_t = tt[Pt], Tt = tt[kt], 6 !== _t || 6 !== Tt && Tt !== ft) {
                          c2.next = 133;
                          break;
                        }
                        return c2.abrupt("continue", 142);
                      case 133:
                        if (6 !== Tt || 6 !== _t && _t !== ft) {
                          c2.next = 137;
                          break;
                        }
                        return c2.abrupt("continue", 142);
                      case 137:
                        if (_t !== ft || Tt !== ft) {
                          c2.next = 141;
                          break;
                        }
                        return c2.abrupt("continue", 142);
                      case 141:
                        e2._drawAlign(F, _t, Tt, O, Ct, Et, this.options.colorDark, (null === (T = null === (_ = this.options.components) || void 0 === _ ? void 0 : _.alignment) || void 0 === T ? void 0 : T.protectors) || false);
                      case 142:
                        Pt++, c2.next = 126;
                        break;
                      case 145:
                        kt++, c2.next = 124;
                        break;
                      case 148:
                        if (M && (F.fillStyle = this.options.backgroundColor, F.fillRect(-D, -D, N, D), F.fillRect(-D, U, N, D), F.fillRect(U, -D, D, N), F.fillRect(-D, -D, D, N)), !this.options.logoImage) {
                          c2.next = 179;
                          break;
                        }
                        return c2.next = 152, v(this.options.logoImage);
                      case 152:
                        Bt = c2.sent, Rt = this.options.logoScale, St = this.options.logoMargin, Dt = this.options.logoCornerRadius, (Rt <= 0 || Rt >= 1) && (Rt = 0.2), St < 0 && (St = 0), Dt < 0 && (Dt = 0), It = Mt = 0.5 * (N - (Lt = U * Rt)), F.restore(), F.fillStyle = this.options.logoBackgroundColor, F.save(), e2._prepareRoundedCornerClip(F, Mt - St, It - St, Lt + 2 * St, Lt + 2 * St, Dt + St), F.clip(), Ot = F.globalCompositeOperation, F.globalCompositeOperation = "destination-out", F.fill(), F.globalCompositeOperation = Ot, F.restore(), F.save(), e2._prepareRoundedCornerClip(F, Mt, It, Lt, Lt, Dt), F.clip(), F.drawImage(Bt, Mt, It, Lt, Lt), F.restore(), F.save(), F.translate(D, D);
                      case 179:
                        if (!G) {
                          c2.next = 191;
                          break;
                        }
                        if (H.forEach(function(t3) {
                          Ut || ((Ut = new g.a(R, R)).setDelay(t3.delay), Ut.setRepeat(0));
                          var e3 = t3.dims, r3 = e3.width, n3 = e3.height;
                          Nt || (Nt = new y(r3, n3), (jt = Nt.getContext("2d")).rect(0, 0, Nt.width, Nt.height), jt.fillStyle = "#ffffff", jt.fill()), Ft && zt && r3 === Ft.width && n3 === Ft.height || (Ft = new y(r3, n3), Yt = Ft.getContext("2d"), zt = Yt.createImageData(r3, n3)), zt.data.set(t3.patch), Yt.putImageData(zt, 0, 0), jt.drawImage(Ft.getContext("2d").canvas, t3.dims.left, t3.dims.top);
                          var o3 = new y(N, N), i3 = o3.getContext("2d");
                          i3.drawImage(Nt.getContext("2d").canvas, 0, 0, N, N), i3.rect(0, 0, N, N), i3.fillStyle = I, i3.fill(), i3.drawImage(j.getContext("2d").canvas, 0, 0, N, N);
                          var a3 = new y(R, R), s3 = a3.getContext("2d");
                          s3.drawImage(o3.getContext("2d").canvas, 0, 0, R, R), Ut.addFrame(s3.getImageData(0, 0, a3.width, a3.height).data);
                        }), Ut) {
                          c2.next = 183;
                          break;
                        }
                        throw new Error("No frames.");
                      case 183:
                        if (Ut.finish(), !w(this.canvas)) {
                          c2.next = 188;
                          break;
                        }
                        return Gt = Ut.stream().toFlattenUint8Array(), Ht = Gt.reduce(function(t3, e3) {
                          return t3 + String.fromCharCode(e3);
                        }, ""), c2.abrupt("return", Promise.resolve("data:image/gif;base64,".concat(window.btoa(Ht))));
                      case 188:
                        return c2.abrupt("return", Promise.resolve(t2.from(Ut.stream().toFlattenUint8Array())));
                      case 191:
                        if (z.drawImage(j.getContext("2d").canvas, 0, 0, N, N), F.drawImage(Y.getContext("2d").canvas, -D, -D, N, N), qt = new y(R, R), qt.getContext("2d").drawImage(j.getContext("2d").canvas, 0, 0, R, R), this.canvas = qt, $t = this.options.gifBackground ? "gif" : "png", !w(this.canvas)) {
                          c2.next = 200;
                          break;
                        }
                        return c2.abrupt("return", Promise.resolve(this.canvas.toDataURL($t)));
                      case 200:
                        return c2.abrupt("return", Promise.resolve(this.canvas.toBuffer($t)));
                      case 201:
                      case "end":
                        return c2.stop();
                    }
                }, d2, this);
              }));
            } }], [{ key: "_prepareRoundedCornerClip", value: function(t3, e3, r2, n2, o2, i2) {
              t3.beginPath(), t3.moveTo(e3, r2), t3.arcTo(e3 + n2, r2, e3 + n2, r2 + o2, i2), t3.arcTo(e3 + n2, r2 + o2, e3, r2 + o2, i2), t3.arcTo(e3, r2 + o2, e3, r2, i2), t3.arcTo(e3, r2, e3 + n2, r2, i2), t3.closePath();
            } }, { key: "_getAverageRGB", value: function(t3) {
              var e3, r2, n2 = { r: 0, g: 0, b: 0 }, o2 = -4, i2 = { r: 0, g: 0, b: 0 }, a2 = 0;
              r2 = t3.naturalHeight || t3.height, e3 = t3.naturalWidth || t3.width;
              var s2, u2 = new y(e3, r2).getContext("2d");
              if (!u2)
                return n2;
              u2.drawImage(t3, 0, 0);
              try {
                s2 = u2.getImageData(0, 0, e3, r2);
              } catch (t4) {
                return n2;
              }
              for (; (o2 += 20) < s2.data.length; )
                s2.data[o2] > 200 || s2.data[o2 + 1] > 200 || s2.data[o2 + 2] > 200 || (++a2, i2.r += s2.data[o2], i2.g += s2.data[o2 + 1], i2.b += s2.data[o2 + 2]);
              return i2.r = ~~(i2.r / a2), i2.g = ~~(i2.g / a2), i2.b = ~~(i2.b / a2), i2;
            } }, { key: "_drawDot", value: function(t3, e3, r2, n2) {
              var o2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, i2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
              t3.fillRect((e3 + o2) * n2, (r2 + o2) * n2, i2 * n2, i2 * n2);
            } }, { key: "_drawAlignProtector", value: function(t3, e3, r2, n2) {
              t3.clearRect((e3 - 2) * n2, (r2 - 2) * n2, 5 * n2, 5 * n2), t3.fillRect((e3 - 2) * n2, (r2 - 2) * n2, 5 * n2, 5 * n2);
            } }, { key: "_drawAlign", value: function(t3, r2, n2, o2) {
              var i2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, a2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1, s2 = arguments.length > 6 ? arguments[6] : void 0, u2 = arguments.length > 7 ? arguments[7] : void 0, l2 = t3.fillStyle;
              t3.fillStyle = s2, new Array(4).fill(0).map(function(s3, u3) {
                e2._drawDot(t3, r2 - 2 + u3, n2 - 2, o2, i2, a2), e2._drawDot(t3, r2 + 2, n2 - 2 + u3, o2, i2, a2), e2._drawDot(t3, r2 + 2 - u3, n2 + 2, o2, i2, a2), e2._drawDot(t3, r2 - 2, n2 + 2 - u3, o2, i2, a2);
              }), e2._drawDot(t3, r2, n2, o2, i2, a2), u2 || (t3.fillStyle = "rgba(255, 255, 255, 0.6)", new Array(2).fill(0).map(function(s3, u3) {
                e2._drawDot(t3, r2 - 1 + u3, n2 - 1, o2, i2, a2), e2._drawDot(t3, r2 + 1, n2 - 1 + u3, o2, i2, a2), e2._drawDot(t3, r2 + 1 - u3, n2 + 1, o2, i2, a2), e2._drawDot(t3, r2 - 1, n2 + 1 - u3, o2, i2, a2);
              })), t3.fillStyle = l2;
            } }]), e2;
          }();
          function w(t3) {
            try {
              return t3 instanceof HTMLElement;
            } catch (e2) {
              return "object" === o()(t3) && 1 === t3.nodeType && "object" === o()(t3.style) && "object" === o()(t3.ownerDocument);
            }
          }
          m.CorrectLevel = p.b, m.defaultComponentOptions = { data: { scale: 0.4 }, timing: { scale: 0.5, protectors: false }, alignment: { scale: 0.5, protectors: false }, cornerAlignment: { scale: 0.5, protectors: true } }, m.defaultOptions = { text: "", size: 400, margin: 20, colorDark: "#000000", colorLight: "rgba(255, 255, 255, 0.6)", correctLevel: p.b.M, backgroundImage: void 0, backgroundDimming: "rgba(0,0,0,0)", logoImage: void 0, logoScale: 0.2, logoMargin: 4, logoCornerRadius: 8, whiteMargin: true, components: m.defaultComponentOptions, autoColor: true, logoBackgroundColor: "#ffffff", backgroundColor: "#ffffff" };
        }).call(this, r(15).Buffer);
      }, function(t, e, r) {
        "use strict";
        var n = r(11);
        const { asBuffer: o, asDownload: i, asZipDownload: a, atScale: s, options: u } = n.a, l = Symbol.for("toDataURL");
        const { CanvasRenderingContext2D: c, CanvasGradient: h, CanvasPattern: f, Image: p, ImageData: g, Path2D: d, DOMMatrix: y, DOMRect: v, DOMPoint: m } = window, w = { Canvas: class {
          constructor(t2, e2) {
            let r2 = document.createElement("canvas"), n2 = [];
            for (var [c2, h2] of (Object.defineProperty(r2, "async", { value: true, writable: false, enumerable: true }), Object.entries({ png: () => o(r2, "image/png"), jpg: () => o(r2, "image/jpeg"), pages: () => n2.concat(r2).map((t3) => t3.getContext("2d")) })))
              Object.defineProperty(r2, c2, { get: h2 });
            return Object.assign(r2, { width: t2, height: e2, newPage(...t3) {
              var { width: e3, height: o2 } = r2, i2 = Object.assign(document.createElement("canvas"), { width: e3, height: o2 });
              i2.getContext("2d").drawImage(r2, 0, 0), n2.push(i2);
              var [e3, o2] = t3.length ? t3 : [e3, o2];
              return Object.assign(r2, { width: e3, height: o2 }).getContext("2d");
            }, saveAs(t3, e3) {
              e3 = "number" == typeof e3 ? { quality: e3 } : e3;
              let r3 = u(this.pages, { filename: t3, ...e3 }), { pattern: n3, padding: o2, mime: l2, quality: c3, matte: h3, density: f2, archive: p2 } = r3, g2 = s(r3.pages, f2);
              return null == o2 ? i(g2[0], l2, c3, h3, t3) : a(g2, l2, c3, h3, p2, n3, o2);
            }, toBuffer(t3 = "png", e3 = {}) {
              e3 = "number" == typeof e3 ? { quality: e3 } : e3;
              let r3 = u(this.pages, { extension: t3, ...e3 }), { mime: n3, quality: i2, matte: a2, pages: l2, density: c3 } = r3, h3 = s(l2, c3, a2)[0];
              return o(h3, n3, i2, a2);
            }, [l]: r2.toDataURL.bind(r2), toDataURL(t3 = "png", e3 = {}) {
              e3 = "number" == typeof e3 ? { quality: e3 } : e3;
              let n3 = u(this.pages, { extension: t3, ...e3 }), { mime: o2, quality: i2, matte: a2, pages: c3, density: h3 } = n3, f2 = s(c3, h3, a2)[0], p2 = f2[f2 === r2 ? l : "toDataURL"](o2, i2);
              return Promise.resolve(p2);
            } });
          }
        }, loadImage: (t2) => new Promise((e2, r2) => Object.assign(new p(), { crossOrigin: "Anonymous", onload: e2, onerror: r2, src: t2 })), CanvasRenderingContext2D: c, CanvasGradient: h, CanvasPattern: f, Image: p, ImageData: g, Path2D: d, DOMMatrix: y, DOMRect: v, DOMPoint: m };
        e.a = w;
      }, function(t, e, r) {
        "use strict";
        (function(t2) {
          var n = r(5);
          class o {
            constructor() {
              let e2 = void 0 === t2, r2 = "image/png", n2 = "image/jpeg", o2 = "application/pdf", i2 = "image/svg+xml";
              Object.assign(this, { toMime: this.toMime.bind(this), fromMime: this.fromMime.bind(this), expected: e2 ? '"png", "jpg", or "webp"' : '"png", "jpg", "pdf", or "svg"', formats: e2 ? { png: r2, jpg: n2, jpeg: "image/jpeg", webp: "image/webp" } : { png: r2, jpg: n2, jpeg: "image/jpeg", pdf: o2, svg: i2 }, mimes: e2 ? { [r2]: "png", [n2]: "jpg", "image/webp": "webp" } : { [r2]: "png", [n2]: "jpg", [o2]: "pdf", [i2]: "svg" } });
            }
            toMime(t3) {
              return this.formats[(t3 || "").replace(/^\./, "").toLowerCase()];
            }
            fromMime(t3) {
              return this.mimes[t3];
            }
          }
          class i {
            static for(t3) {
              return new i().append(t3).get();
            }
            constructor() {
              this.crc = -1;
            }
            get() {
              return ~this.crc;
            }
            append(t3) {
              for (var e2 = 0 | this.crc, r2 = this.table, n2 = 0, o2 = 0 | t3.length; n2 < o2; n2++)
                e2 = e2 >>> 8 ^ r2[255 & (e2 ^ t3[n2])];
              return this.crc = e2, this;
            }
          }
          function a(t3) {
            let e2 = new Uint8Array(t3), r2 = new DataView(e2.buffer), n2 = { array: e2, view: r2, size: t3, set8: (t4, e3) => (r2.setUint8(t4, e3), n2), set16: (t4, e3) => (r2.setUint16(t4, e3, true), n2), set32: (t4, e3) => (r2.setUint32(t4, e3, true), n2), bytes: (t4, r3) => (e2.set(r3, t4), n2) };
            return n2;
          }
          i.prototype.table = (() => {
            var t3, e2, r2, n2 = [];
            for (t3 = 0; t3 < 256; t3++) {
              for (r2 = t3, e2 = 0; e2 < 8; e2++)
                r2 = 1 & r2 ? r2 >>> 1 ^ 3988292384 : r2 >>> 1;
              n2[t3] = r2;
            }
            return n2;
          })();
          class s {
            constructor(t3) {
              let e2 = /* @__PURE__ */ new Date();
              Object.assign(this, { directory: t3, offset: 0, files: [], time: (e2.getHours() << 6 | e2.getMinutes()) << 5 | e2.getSeconds() / 2, date: (e2.getFullYear() - 1980 << 4 | e2.getMonth() + 1) << 5 | e2.getDate() }), this.add(t3);
            }
            async add(t3, e2) {
              let r2 = !e2, n2 = s.encoder.encode(`${this.directory}/${r2 ? "" : t3}`), o2 = new Uint8Array(r2 ? 0 : await e2.arrayBuffer()), u2 = 30 + n2.length, l2 = u2 + o2.length, { offset: c2 } = this, h = a(26).set32(0, 134742036).set16(6, this.time).set16(8, this.date).set32(10, i.for(o2)).set32(14, o2.length).set32(18, o2.length).set16(22, n2.length);
              c2 += u2;
              let f = a(u2 + o2.length + 16).set32(0, 67324752).bytes(4, h.array).bytes(30, n2).bytes(u2, o2);
              c2 += o2.length, f.set32(l2, 134695760).bytes(l2 + 4, h.array.slice(10, 22)), c2 += 16, this.files.push({ offset: c2, folder: r2, name: n2, header: h, payload: f }), this.offset = c2;
            }
            toBuffer() {
              let t3 = this.files.reduce((t4, { name: e3 }) => 46 + e3.length + t4, 0), e2 = a(t3 + 22), r2 = 0;
              for (var { offset: n2, name: o2, header: i2, folder: s2 } of this.files)
                e2.set32(r2, 33639248).set16(r2 + 4, 20).bytes(r2 + 6, i2.array).set8(r2 + 38, s2 ? 16 : 0).set32(r2 + 42, n2).bytes(r2 + 46, o2), r2 += 46 + o2.length;
              e2.set32(r2, 101010256).set16(r2 + 8, this.files.length).set16(r2 + 10, this.files.length).set32(r2 + 12, t3).set32(r2 + 16, this.offset);
              let u2 = new Uint8Array(this.offset + e2.size), l2 = 0;
              for (var { payload: c2 } of this.files)
                u2.set(c2.array, l2), l2 += c2.size;
              return u2.set(e2.array, l2), u2;
            }
            get blob() {
              return new Blob([this.toBuffer()], { type: "application/zip" });
            }
          }
          s.encoder = new TextEncoder();
          const u = (t3, e2, r2, n2) => {
            if (n2) {
              let { width: e3, height: r3 } = t3, o2 = Object.assign(document.createElement("canvas"), { width: e3, height: r3 }), i2 = o2.getContext("2d");
              i2.fillStyle = n2, i2.fillRect(0, 0, e3, r3), i2.drawImage(t3, 0, 0), t3 = o2;
            }
            return new Promise((n3, o2) => t3.toBlob(n3, e2, r2));
          }, l = (t3, e2) => {
            const r2 = window.URL.createObjectURL(e2), n2 = document.createElement("a");
            n2.style.display = "none", n2.href = r2, n2.setAttribute("download", t3), void 0 === n2.download && n2.setAttribute("target", "_blank"), document.body.appendChild(n2), n2.click(), document.body.removeChild(n2), setTimeout(() => window.URL.revokeObjectURL(r2), 100);
          }, c = { asBuffer: (...t3) => u(...t3).then((t4) => t4.arrayBuffer()), asDownload: async (t3, e2, r2, n2, o2) => {
            l(o2, await u(t3, e2, r2, n2));
          }, asZipDownload: async (t3, e2, r2, o2, i2, a2, c2) => {
            let h = Object(n.a)(i2, ".zip") || "archive", f = new s(h);
            await Promise.all(t3.map(async (t4, n2) => {
              let i3 = ((t5) => a2.replace("{}", String(t5 + 1).padStart(c2, "0")))(n2);
              await f.add(i3, await u(t4, e2, r2, o2));
            })), l(h + ".zip", f.blob);
          }, atScale: (t3, e2, r2) => t3.map((t4) => {
            if (1 == e2 && !r2)
              return t4.canvas;
            let n2 = document.createElement("canvas"), o2 = n2.getContext("2d"), i2 = t4.canvas ? t4.canvas : t4;
            return n2.width = i2.width * e2, n2.height = i2.height * e2, r2 && (o2.fillStyle = r2, o2.fillRect(0, 0, n2.width, n2.height)), o2.scale(e2, e2), o2.drawImage(i2, 0, 0), n2;
          }), options: function(t3, { filename: e2 = "", extension: r2 = "", format: i2, page: a2, quality: s2, matte: u2, density: l2, outline: c2, archive: h } = {}) {
            var { fromMime: f, toMime: p, expected: g } = new o(), d = (h = h || "canvas", i2 || r2.replace(/@\d+x$/i, "") || Object(n.b)(e2)), y = (i2 = f(p(d) || d), p(i2)), v = t3.length;
            if (!d)
              throw new Error("Cannot determine image format (use a filename extension or 'format' argument)");
            if (!i2)
              throw new Error(`Unsupported file format "${d}" (expected ${g})`);
            if (!v)
              throw new RangeError("Canvas has no associated contexts (try calling getContext or newPage first)");
            let m, w, b = e2.replace(/{(\d*)}/g, (t4, e3) => (w = true, e3 = parseInt(e3, 10), m = isFinite(e3) ? e3 : isFinite(m) ? m : -1, "{}")), x = a2 > 0 ? a2 - 1 : a2 < 0 ? v + a2 : void 0;
            if (isFinite(x) && x < 0 || x >= v)
              throw new RangeError(1 == v ? `Canvas only has a ‘page 1’ (${x} is out of bounds)` : `Canvas has pages 1–${v} (${x} is out of bounds)`);
            if (t3 = isFinite(x) ? [t3[x]] : w || "pdf" == i2 ? t3 : t3.slice(-1), void 0 === s2)
              s2 = 0.92;
            else if ("number" != typeof s2 || !isFinite(s2) || s2 < 0 || s2 > 1)
              throw new TypeError("The quality option must be an number in the 0.0–1.0 range");
            if (void 0 === l2) {
              let t4 = (r2 || Object(n.a)(e2, d)).match(/@(\d+)x$/i);
              l2 = t4 ? parseInt(t4[1], 10) : 1;
            } else if ("number" != typeof l2 || !Number.isInteger(l2) || l2 < 1)
              throw new TypeError("The density option must be a non-negative integer");
            return void 0 === c2 ? c2 = true : "svg" == i2 && (c2 = !!c2), { filename: e2, pattern: b, format: i2, mime: y, pages: t3, padding: m, quality: s2, matte: u2, density: l2, outline: c2, archive: h };
          } };
          e.a = c;
        }).call(this, r(8));
      }, function(t, e, r) {
        "use strict";
        var n = function(t2, e2) {
          var r2, n2, o2, i2, a2;
          function s2(t3, e3, n3, o3, i3) {
            r2[e3][0] -= t3 * (r2[e3][0] - n3) / 1024, r2[e3][1] -= t3 * (r2[e3][1] - o3) / 1024, r2[e3][2] -= t3 * (r2[e3][2] - i3) / 1024;
          }
          function u2(t3, e3, n3, o3, i3) {
            for (var s3, u3, l2 = Math.abs(e3 - t3), c = Math.min(e3 + t3, 256), h = e3 + 1, f = e3 - 1, p = 1; h < c || f > l2; )
              u3 = a2[p++], h < c && ((s3 = r2[h++])[0] -= u3 * (s3[0] - n3) / (1 << 18), s3[1] -= u3 * (s3[1] - o3) / (1 << 18), s3[2] -= u3 * (s3[2] - i3) / (1 << 18)), f > l2 && ((s3 = r2[f--])[0] -= u3 * (s3[0] - n3) / (1 << 18), s3[1] -= u3 * (s3[1] - o3) / (1 << 18), s3[2] -= u3 * (s3[2] - i3) / (1 << 18));
          }
          function l(t3, e3, n3) {
            var a3, s3, u3, l2, c, h = ~(1 << 31), f = h, p = -1, g = p;
            for (a3 = 0; a3 < 256; a3++)
              s3 = r2[a3], (u3 = Math.abs(s3[0] - t3) + Math.abs(s3[1] - e3) + Math.abs(s3[2] - n3)) < h && (h = u3, p = a3), (l2 = u3 - (o2[a3] >> 12)) < f && (f = l2, g = a3), c = i2[a3] >> 10, i2[a3] -= c, o2[a3] += c << 10;
            return i2[p] += 64, o2[p] -= 65536, g;
          }
          this.buildColormap = function() {
            !function() {
              var t3, e3;
              for (r2 = [], n2 = new Int32Array(256), o2 = new Int32Array(256), i2 = new Int32Array(256), a2 = new Int32Array(32), t3 = 0; t3 < 256; t3++)
                e3 = (t3 << 12) / 256, r2[t3] = new Float64Array([e3, e3, e3, 0]), i2[t3] = 256, o2[t3] = 0;
            }(), function() {
              var r3, n3, o3, i3, c, h, f = t2.length, p = 30 + (e2 - 1) / 3, g = f / (3 * e2), d = ~~(g / 100), y = 1024, v = 2048, m = v >> 6;
              for (m <= 1 && (m = 0), r3 = 0; r3 < m; r3++)
                a2[r3] = y * (256 * (m * m - r3 * r3) / (m * m));
              f < 1509 ? (e2 = 1, n3 = 3) : n3 = f % 499 != 0 ? 1497 : f % 491 != 0 ? 1473 : f % 487 != 0 ? 1461 : 1509;
              var w = 0;
              for (r3 = 0; r3 < g; )
                if (s2(y, h = l(o3 = (255 & t2[w]) << 4, i3 = (255 & t2[w + 1]) << 4, c = (255 & t2[w + 2]) << 4), o3, i3, c), 0 !== m && u2(m, h, o3, i3, c), (w += n3) >= f && (w -= f), 0 === d && (d = 1), ++r3 % d == 0)
                  for (y -= y / p, (m = (v -= v / 30) >> 6) <= 1 && (m = 0), h = 0; h < m; h++)
                    a2[h] = y * (256 * (m * m - h * h) / (m * m));
            }(), function() {
              for (var t3 = 0; t3 < 256; t3++)
                r2[t3][0] >>= 4, r2[t3][1] >>= 4, r2[t3][2] >>= 4, r2[t3][3] = t3;
            }(), function() {
              var t3, e3, o3, i3, a3, s3, u3 = 0, l2 = 0;
              for (t3 = 0; t3 < 256; t3++) {
                for (a3 = t3, s3 = (o3 = r2[t3])[1], e3 = t3 + 1; e3 < 256; e3++)
                  (i3 = r2[e3])[1] < s3 && (a3 = e3, s3 = i3[1]);
                if (i3 = r2[a3], t3 != a3 && (e3 = i3[0], i3[0] = o3[0], o3[0] = e3, e3 = i3[1], i3[1] = o3[1], o3[1] = e3, e3 = i3[2], i3[2] = o3[2], o3[2] = e3, e3 = i3[3], i3[3] = o3[3], o3[3] = e3), s3 != u3) {
                  for (n2[u3] = l2 + t3 >> 1, e3 = u3 + 1; e3 < s3; e3++)
                    n2[e3] = t3;
                  u3 = s3, l2 = t3;
                }
              }
              for (n2[u3] = l2 + 255 >> 1, e3 = u3 + 1; e3 < 256; e3++)
                n2[e3] = 255;
            }();
          }, this.getColormap = function() {
            for (var t3 = [], e3 = [], n3 = 0; n3 < 256; n3++)
              e3[r2[n3][3]] = n3;
            for (var o3 = 0, i3 = 0; i3 < 256; i3++) {
              var a3 = e3[i3];
              t3[o3++] = r2[a3][0], t3[o3++] = r2[a3][1], t3[o3++] = r2[a3][2];
            }
            return t3;
          }, this.lookupRGB = function(t3, e3, o3) {
            for (var i3, a3, s3, u3 = 1e3, l2 = -1, c = n2[e3], h = c - 1; c < 256 || h >= 0; )
              c < 256 && ((s3 = (a3 = r2[c])[1] - e3) >= u3 ? c = 256 : (c++, s3 < 0 && (s3 = -s3), (i3 = a3[0] - t3) < 0 && (i3 = -i3), (s3 += i3) < u3 && ((i3 = a3[2] - o3) < 0 && (i3 = -i3), (s3 += i3) < u3 && (u3 = s3, l2 = a3[3])))), h >= 0 && ((s3 = e3 - (a3 = r2[h])[1]) >= u3 ? h = -1 : (h--, s3 < 0 && (s3 = -s3), (i3 = a3[0] - t3) < 0 && (i3 = -i3), (s3 += i3) < u3 && ((i3 = a3[2] - o3) < 0 && (i3 = -i3), (s3 += i3) < u3 && (u3 = s3, l2 = a3[3]))));
            return l2;
          };
        }, o = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];
        var i = function(t2, e2, r2, n2) {
          var i2, a2, s2, u2, l, c, h, f, p, g = Math.max(2, n2), d = new Uint8Array(256), y = new Int32Array(5003), v = new Int32Array(5003), m = 0, w = 0, b = false;
          function x(t3, e3) {
            d[a2++] = t3, a2 >= 254 && C(e3);
          }
          function A(t3) {
            E(5003), w = l + 2, b = true, _(l, t3);
          }
          function E(t3) {
            for (var e3 = 0; e3 < t3; ++e3)
              y[e3] = -1;
          }
          function C(t3) {
            a2 > 0 && (t3.writeByte(a2), t3.writeBytes(d, 0, a2), a2 = 0);
          }
          function k(t3) {
            return (1 << t3) - 1;
          }
          function P() {
            return 0 === h ? -1 : (--h, 255 & r2[f++]);
          }
          function _(t3, e3) {
            for (i2 &= o[m], m > 0 ? i2 |= t3 << m : i2 = t3, m += p; m >= 8; )
              x(255 & i2, e3), i2 >>= 8, m -= 8;
            if ((w > s2 || b) && (b ? (s2 = k(p = u2), b = false) : (++p, s2 = 12 == p ? 4096 : k(p))), t3 == c) {
              for (; m > 0; )
                x(255 & i2, e3), i2 >>= 8, m -= 8;
              C(e3);
            }
          }
          this.encode = function(r3) {
            r3.writeByte(g), h = t2 * e2, f = 0, function(t3, e3) {
              var r4, n3, o2, i3, h2, f2;
              for (b = false, s2 = k(p = u2 = t3), c = (l = 1 << t3 - 1) + 1, w = l + 2, a2 = 0, i3 = P(), f2 = 0, r4 = 5003; r4 < 65536; r4 *= 2)
                ++f2;
              f2 = 8 - f2, E(5003), _(l, e3);
              t:
                for (; -1 != (n3 = P()); )
                  if (r4 = (n3 << 12) + i3, y[o2 = n3 << f2 ^ i3] !== r4) {
                    if (y[o2] >= 0) {
                      h2 = 5003 - o2, 0 === o2 && (h2 = 1);
                      do {
                        if ((o2 -= h2) < 0 && (o2 += 5003), y[o2] === r4) {
                          i3 = v[o2];
                          continue t;
                        }
                      } while (y[o2] >= 0);
                    }
                    _(i3, e3), i3 = n3, w < 4096 ? (v[o2] = w++, y[o2] = r4) : A(e3);
                  } else
                    i3 = v[o2];
              _(i3, e3), _(c, e3);
            }(g + 1, r3), r3.writeByte(0);
          };
        };
        function a() {
          this.page = -1, this.pages = [], this.newPage();
        }
        a.pageSize = 4096, a.charMap = {};
        for (var s = 0; s < 256; s++)
          a.charMap[s] = String.fromCharCode(s);
        function u(t2, e2) {
          this.width = ~~t2, this.height = ~~e2, this.transparent = null, this.transIndex = 0, this.repeat = -1, this.delay = 0, this.image = null, this.pixels = null, this.indexedPixels = null, this.colorDepth = null, this.colorTab = null, this.neuQuant = null, this.usedEntry = new Array(), this.palSize = 7, this.dispose = -1, this.firstFrame = true, this.sample = 10, this.dither = false, this.globalPalette = false, this.out = new a();
        }
        a.prototype.newPage = function() {
          this.pages[++this.page] = new Uint8Array(a.pageSize), this.cursor = 0;
        }, a.prototype.getData = function() {
          for (var t2 = "", e2 = 0; e2 < this.pages.length; e2++)
            for (var r2 = 0; r2 < a.pageSize; r2++)
              t2 += a.charMap[this.pages[e2][r2]];
          return t2;
        }, a.prototype.toFlattenUint8Array = function() {
          for (var t2 = [], e2 = 0; e2 < this.pages.length; e2++)
            if (e2 === this.pages.length - 1) {
              var r2 = Uint8Array.from(this.pages[e2].slice(0, this.cursor));
              t2.push(r2);
            } else
              t2.push(this.pages[e2]);
          var n2 = new Uint8Array(t2.reduce(function(t3, e3) {
            return t3 + e3.length;
          }, 0));
          return t2.reduce(function(t3, e3) {
            return n2.set(e3, t3), t3 + e3.length;
          }, 0), n2;
        }, a.prototype.writeByte = function(t2) {
          this.cursor >= a.pageSize && this.newPage(), this.pages[this.page][this.cursor++] = t2;
        }, a.prototype.writeUTFBytes = function(t2) {
          for (var e2 = t2.length, r2 = 0; r2 < e2; r2++)
            this.writeByte(t2.charCodeAt(r2));
        }, a.prototype.writeBytes = function(t2, e2, r2) {
          for (var n2 = r2 || t2.length, o2 = e2 || 0; o2 < n2; o2++)
            this.writeByte(t2[o2]);
        }, u.prototype.setDelay = function(t2) {
          this.delay = Math.round(t2 / 10);
        }, u.prototype.setFrameRate = function(t2) {
          this.delay = Math.round(100 / t2);
        }, u.prototype.setDispose = function(t2) {
          t2 >= 0 && (this.dispose = t2);
        }, u.prototype.setRepeat = function(t2) {
          this.repeat = t2;
        }, u.prototype.setTransparent = function(t2) {
          this.transparent = t2;
        }, u.prototype.addFrame = function(t2) {
          this.image = t2, this.colorTab = this.globalPalette && this.globalPalette.slice ? this.globalPalette : null, this.getImagePixels(), this.analyzePixels(), true === this.globalPalette && (this.globalPalette = this.colorTab), this.firstFrame && (this.writeHeader(), this.writeLSD(), this.writePalette(), this.repeat >= 0 && this.writeNetscapeExt()), this.writeGraphicCtrlExt(), this.writeImageDesc(), this.firstFrame || this.globalPalette || this.writePalette(), this.writePixels(), this.firstFrame = false;
        }, u.prototype.finish = function() {
          this.out.writeByte(59);
        }, u.prototype.setQuality = function(t2) {
          t2 < 1 && (t2 = 1), this.sample = t2;
        }, u.prototype.setDither = function(t2) {
          true === t2 && (t2 = "FloydSteinberg"), this.dither = t2;
        }, u.prototype.setGlobalPalette = function(t2) {
          this.globalPalette = t2;
        }, u.prototype.getGlobalPalette = function() {
          return this.globalPalette && this.globalPalette.slice && this.globalPalette.slice(0) || this.globalPalette;
        }, u.prototype.writeHeader = function() {
          this.out.writeUTFBytes("GIF89a");
        }, u.prototype.analyzePixels = function() {
          this.colorTab || (this.neuQuant = new n(this.pixels, this.sample), this.neuQuant.buildColormap(), this.colorTab = this.neuQuant.getColormap()), this.dither ? this.ditherPixels(this.dither.replace("-serpentine", ""), null !== this.dither.match(/-serpentine/)) : this.indexPixels(), this.pixels = null, this.colorDepth = 8, this.palSize = 7, null !== this.transparent && (this.transIndex = this.findClosest(this.transparent, true));
        }, u.prototype.indexPixels = function(t2) {
          var e2 = this.pixels.length / 3;
          this.indexedPixels = new Uint8Array(e2);
          for (var r2 = 0, n2 = 0; n2 < e2; n2++) {
            var o2 = this.findClosestRGB(255 & this.pixels[r2++], 255 & this.pixels[r2++], 255 & this.pixels[r2++]);
            this.usedEntry[o2] = true, this.indexedPixels[n2] = o2;
          }
        }, u.prototype.ditherPixels = function(t2, e2) {
          var r2 = { FalseFloydSteinberg: [[3 / 8, 1, 0], [3 / 8, 0, 1], [2 / 8, 1, 1]], FloydSteinberg: [[7 / 16, 1, 0], [3 / 16, -1, 1], [5 / 16, 0, 1], [1 / 16, 1, 1]], Stucki: [[8 / 42, 1, 0], [4 / 42, 2, 0], [2 / 42, -2, 1], [4 / 42, -1, 1], [8 / 42, 0, 1], [4 / 42, 1, 1], [2 / 42, 2, 1], [1 / 42, -2, 2], [2 / 42, -1, 2], [4 / 42, 0, 2], [2 / 42, 1, 2], [1 / 42, 2, 2]], Atkinson: [[1 / 8, 1, 0], [1 / 8, 2, 0], [1 / 8, -1, 1], [1 / 8, 0, 1], [1 / 8, 1, 1], [1 / 8, 0, 2]] };
          if (!t2 || !r2[t2])
            throw "Unknown dithering kernel: " + t2;
          var n2 = r2[t2], o2 = 0, i2 = this.height, a2 = this.width, s2 = this.pixels, u2 = e2 ? -1 : 1;
          this.indexedPixels = new Uint8Array(this.pixels.length / 3);
          for (var l = 0; l < i2; l++) {
            e2 && (u2 *= -1);
            for (var c = 1 == u2 ? 0 : a2 - 1, h = 1 == u2 ? a2 : 0; c !== h; c += u2) {
              var f = 3 * (o2 = l * a2 + c), p = s2[f], g = s2[f + 1], d = s2[f + 2];
              f = this.findClosestRGB(p, g, d), this.usedEntry[f] = true, this.indexedPixels[o2] = f, f *= 3;
              for (var y = p - this.colorTab[f], v = g - this.colorTab[f + 1], m = d - this.colorTab[f + 2], w = 1 == u2 ? 0 : n2.length - 1, b = 1 == u2 ? n2.length : 0; w !== b; w += u2) {
                var x = n2[w][1], A = n2[w][2];
                if (x + c >= 0 && x + c < a2 && A + l >= 0 && A + l < i2) {
                  var E = n2[w][0];
                  f = o2 + x + A * a2, s2[f *= 3] = Math.max(0, Math.min(255, s2[f] + y * E)), s2[f + 1] = Math.max(0, Math.min(255, s2[f + 1] + v * E)), s2[f + 2] = Math.max(0, Math.min(255, s2[f + 2] + m * E));
                }
              }
            }
          }
        }, u.prototype.findClosest = function(t2, e2) {
          return this.findClosestRGB((16711680 & t2) >> 16, (65280 & t2) >> 8, 255 & t2, e2);
        }, u.prototype.findClosestRGB = function(t2, e2, r2, n2) {
          if (null === this.colorTab)
            return -1;
          if (this.neuQuant && !n2)
            return this.neuQuant.lookupRGB(t2, e2, r2);
          for (var o2 = 0, i2 = 16777216, a2 = this.colorTab.length, s2 = 0, u2 = 0; s2 < a2; u2++) {
            var l = t2 - (255 & this.colorTab[s2++]), c = e2 - (255 & this.colorTab[s2++]), h = r2 - (255 & this.colorTab[s2++]), f = l * l + c * c + h * h;
            (!n2 || this.usedEntry[u2]) && f < i2 && (i2 = f, o2 = u2);
          }
          return o2;
        }, u.prototype.getImagePixels = function() {
          var t2 = this.width, e2 = this.height;
          this.pixels = new Uint8Array(t2 * e2 * 3);
          for (var r2 = this.image, n2 = 0, o2 = 0, i2 = 0; i2 < e2; i2++)
            for (var a2 = 0; a2 < t2; a2++)
              this.pixels[o2++] = r2[n2++], this.pixels[o2++] = r2[n2++], this.pixels[o2++] = r2[n2++], n2++;
        }, u.prototype.writeGraphicCtrlExt = function() {
          var t2, e2;
          this.out.writeByte(33), this.out.writeByte(249), this.out.writeByte(4), null === this.transparent ? (t2 = 0, e2 = 0) : (t2 = 1, e2 = 2), this.dispose >= 0 && (e2 = 7 & this.dispose), e2 <<= 2, this.out.writeByte(0 | e2 | t2), this.writeShort(this.delay), this.out.writeByte(this.transIndex), this.out.writeByte(0);
        }, u.prototype.writeImageDesc = function() {
          this.out.writeByte(44), this.writeShort(0), this.writeShort(0), this.writeShort(this.width), this.writeShort(this.height), this.firstFrame || this.globalPalette ? this.out.writeByte(0) : this.out.writeByte(128 | this.palSize);
        }, u.prototype.writeLSD = function() {
          this.writeShort(this.width), this.writeShort(this.height), this.out.writeByte(240 | this.palSize), this.out.writeByte(0), this.out.writeByte(0);
        }, u.prototype.writeNetscapeExt = function() {
          this.out.writeByte(33), this.out.writeByte(255), this.out.writeByte(11), this.out.writeUTFBytes("NETSCAPE2.0"), this.out.writeByte(3), this.out.writeByte(1), this.writeShort(this.repeat), this.out.writeByte(0);
        }, u.prototype.writePalette = function() {
          this.out.writeBytes(this.colorTab);
          for (var t2 = 768 - this.colorTab.length, e2 = 0; e2 < t2; e2++)
            this.out.writeByte(0);
        }, u.prototype.writeShort = function(t2) {
          this.out.writeByte(255 & t2), this.out.writeByte(t2 >> 8 & 255);
        }, u.prototype.writePixels = function() {
          new i(this.width, this.height, this.indexedPixels, this.colorDepth).encode(this.out);
        }, u.prototype.stream = function() {
          return this.out;
        };
        e.a = u;
      }, function(t, e, r) {
        t.exports = r(20);
      }, function(t, e, r) {
        var n = r(2).default;
        function o() {
          "use strict";
          t.exports = o = function() {
            return e2;
          }, t.exports.__esModule = true, t.exports.default = t.exports;
          var e2 = {}, r2 = Object.prototype, i = r2.hasOwnProperty, a = "function" == typeof Symbol ? Symbol : {}, s = a.iterator || "@@iterator", u = a.asyncIterator || "@@asyncIterator", l = a.toStringTag || "@@toStringTag";
          function c(t2, e3, r3) {
            return Object.defineProperty(t2, e3, { value: r3, enumerable: true, configurable: true, writable: true }), t2[e3];
          }
          try {
            c({}, "");
          } catch (t2) {
            c = function(t3, e3, r3) {
              return t3[e3] = r3;
            };
          }
          function h(t2, e3, r3, n2) {
            var o2 = e3 && e3.prototype instanceof g ? e3 : g, i2 = Object.create(o2.prototype), a2 = new P(n2 || []);
            return i2._invoke = function(t3, e4, r4) {
              var n3 = "suspendedStart";
              return function(o3, i3) {
                if ("executing" === n3)
                  throw new Error("Generator is already running");
                if ("completed" === n3) {
                  if ("throw" === o3)
                    throw i3;
                  return T();
                }
                for (r4.method = o3, r4.arg = i3; ; ) {
                  var a3 = r4.delegate;
                  if (a3) {
                    var s2 = E(a3, r4);
                    if (s2) {
                      if (s2 === p)
                        continue;
                      return s2;
                    }
                  }
                  if ("next" === r4.method)
                    r4.sent = r4._sent = r4.arg;
                  else if ("throw" === r4.method) {
                    if ("suspendedStart" === n3)
                      throw n3 = "completed", r4.arg;
                    r4.dispatchException(r4.arg);
                  } else
                    "return" === r4.method && r4.abrupt("return", r4.arg);
                  n3 = "executing";
                  var u2 = f(t3, e4, r4);
                  if ("normal" === u2.type) {
                    if (n3 = r4.done ? "completed" : "suspendedYield", u2.arg === p)
                      continue;
                    return { value: u2.arg, done: r4.done };
                  }
                  "throw" === u2.type && (n3 = "completed", r4.method = "throw", r4.arg = u2.arg);
                }
              };
            }(t2, r3, a2), i2;
          }
          function f(t2, e3, r3) {
            try {
              return { type: "normal", arg: t2.call(e3, r3) };
            } catch (t3) {
              return { type: "throw", arg: t3 };
            }
          }
          e2.wrap = h;
          var p = {};
          function g() {
          }
          function d() {
          }
          function y() {
          }
          var v = {};
          c(v, s, function() {
            return this;
          });
          var m = Object.getPrototypeOf, w = m && m(m(_([])));
          w && w !== r2 && i.call(w, s) && (v = w);
          var b = y.prototype = g.prototype = Object.create(v);
          function x(t2) {
            ["next", "throw", "return"].forEach(function(e3) {
              c(t2, e3, function(t3) {
                return this._invoke(e3, t3);
              });
            });
          }
          function A(t2, e3) {
            var r3;
            this._invoke = function(o2, a2) {
              function s2() {
                return new e3(function(r4, s3) {
                  !function r5(o3, a3, s4, u2) {
                    var l2 = f(t2[o3], t2, a3);
                    if ("throw" !== l2.type) {
                      var c2 = l2.arg, h2 = c2.value;
                      return h2 && "object" == n(h2) && i.call(h2, "__await") ? e3.resolve(h2.__await).then(function(t3) {
                        r5("next", t3, s4, u2);
                      }, function(t3) {
                        r5("throw", t3, s4, u2);
                      }) : e3.resolve(h2).then(function(t3) {
                        c2.value = t3, s4(c2);
                      }, function(t3) {
                        return r5("throw", t3, s4, u2);
                      });
                    }
                    u2(l2.arg);
                  }(o2, a2, r4, s3);
                });
              }
              return r3 = r3 ? r3.then(s2, s2) : s2();
            };
          }
          function E(t2, e3) {
            var r3 = t2.iterator[e3.method];
            if (void 0 === r3) {
              if (e3.delegate = null, "throw" === e3.method) {
                if (t2.iterator.return && (e3.method = "return", e3.arg = void 0, E(t2, e3), "throw" === e3.method))
                  return p;
                e3.method = "throw", e3.arg = new TypeError("The iterator does not provide a 'throw' method");
              }
              return p;
            }
            var n2 = f(r3, t2.iterator, e3.arg);
            if ("throw" === n2.type)
              return e3.method = "throw", e3.arg = n2.arg, e3.delegate = null, p;
            var o2 = n2.arg;
            return o2 ? o2.done ? (e3[t2.resultName] = o2.value, e3.next = t2.nextLoc, "return" !== e3.method && (e3.method = "next", e3.arg = void 0), e3.delegate = null, p) : o2 : (e3.method = "throw", e3.arg = new TypeError("iterator result is not an object"), e3.delegate = null, p);
          }
          function C(t2) {
            var e3 = { tryLoc: t2[0] };
            1 in t2 && (e3.catchLoc = t2[1]), 2 in t2 && (e3.finallyLoc = t2[2], e3.afterLoc = t2[3]), this.tryEntries.push(e3);
          }
          function k(t2) {
            var e3 = t2.completion || {};
            e3.type = "normal", delete e3.arg, t2.completion = e3;
          }
          function P(t2) {
            this.tryEntries = [{ tryLoc: "root" }], t2.forEach(C, this), this.reset(true);
          }
          function _(t2) {
            if (t2) {
              var e3 = t2[s];
              if (e3)
                return e3.call(t2);
              if ("function" == typeof t2.next)
                return t2;
              if (!isNaN(t2.length)) {
                var r3 = -1, n2 = function e4() {
                  for (; ++r3 < t2.length; )
                    if (i.call(t2, r3))
                      return e4.value = t2[r3], e4.done = false, e4;
                  return e4.value = void 0, e4.done = true, e4;
                };
                return n2.next = n2;
              }
            }
            return { next: T };
          }
          function T() {
            return { value: void 0, done: true };
          }
          return d.prototype = y, c(b, "constructor", y), c(y, "constructor", d), d.displayName = c(y, l, "GeneratorFunction"), e2.isGeneratorFunction = function(t2) {
            var e3 = "function" == typeof t2 && t2.constructor;
            return !!e3 && (e3 === d || "GeneratorFunction" === (e3.displayName || e3.name));
          }, e2.mark = function(t2) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t2, y) : (t2.__proto__ = y, c(t2, l, "GeneratorFunction")), t2.prototype = Object.create(b), t2;
          }, e2.awrap = function(t2) {
            return { __await: t2 };
          }, x(A.prototype), c(A.prototype, u, function() {
            return this;
          }), e2.AsyncIterator = A, e2.async = function(t2, r3, n2, o2, i2) {
            void 0 === i2 && (i2 = Promise);
            var a2 = new A(h(t2, r3, n2, o2), i2);
            return e2.isGeneratorFunction(r3) ? a2 : a2.next().then(function(t3) {
              return t3.done ? t3.value : a2.next();
            });
          }, x(b), c(b, l, "Generator"), c(b, s, function() {
            return this;
          }), c(b, "toString", function() {
            return "[object Generator]";
          }), e2.keys = function(t2) {
            var e3 = [];
            for (var r3 in t2)
              e3.push(r3);
            return e3.reverse(), function r4() {
              for (; e3.length; ) {
                var n2 = e3.pop();
                if (n2 in t2)
                  return r4.value = n2, r4.done = false, r4;
              }
              return r4.done = true, r4;
            };
          }, e2.values = _, P.prototype = { constructor: P, reset: function(t2) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t2)
              for (var e3 in this)
                "t" === e3.charAt(0) && i.call(this, e3) && !isNaN(+e3.slice(1)) && (this[e3] = void 0);
          }, stop: function() {
            this.done = true;
            var t2 = this.tryEntries[0].completion;
            if ("throw" === t2.type)
              throw t2.arg;
            return this.rval;
          }, dispatchException: function(t2) {
            if (this.done)
              throw t2;
            var e3 = this;
            function r3(r4, n3) {
              return a2.type = "throw", a2.arg = t2, e3.next = r4, n3 && (e3.method = "next", e3.arg = void 0), !!n3;
            }
            for (var n2 = this.tryEntries.length - 1; n2 >= 0; --n2) {
              var o2 = this.tryEntries[n2], a2 = o2.completion;
              if ("root" === o2.tryLoc)
                return r3("end");
              if (o2.tryLoc <= this.prev) {
                var s2 = i.call(o2, "catchLoc"), u2 = i.call(o2, "finallyLoc");
                if (s2 && u2) {
                  if (this.prev < o2.catchLoc)
                    return r3(o2.catchLoc, true);
                  if (this.prev < o2.finallyLoc)
                    return r3(o2.finallyLoc);
                } else if (s2) {
                  if (this.prev < o2.catchLoc)
                    return r3(o2.catchLoc, true);
                } else {
                  if (!u2)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o2.finallyLoc)
                    return r3(o2.finallyLoc);
                }
              }
            }
          }, abrupt: function(t2, e3) {
            for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
              var n2 = this.tryEntries[r3];
              if (n2.tryLoc <= this.prev && i.call(n2, "finallyLoc") && this.prev < n2.finallyLoc) {
                var o2 = n2;
                break;
              }
            }
            o2 && ("break" === t2 || "continue" === t2) && o2.tryLoc <= e3 && e3 <= o2.finallyLoc && (o2 = null);
            var a2 = o2 ? o2.completion : {};
            return a2.type = t2, a2.arg = e3, o2 ? (this.method = "next", this.next = o2.finallyLoc, p) : this.complete(a2);
          }, complete: function(t2, e3) {
            if ("throw" === t2.type)
              throw t2.arg;
            return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e3 && (this.next = e3), p;
          }, finish: function(t2) {
            for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
              var r3 = this.tryEntries[e3];
              if (r3.finallyLoc === t2)
                return this.complete(r3.completion, r3.afterLoc), k(r3), p;
            }
          }, catch: function(t2) {
            for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
              var r3 = this.tryEntries[e3];
              if (r3.tryLoc === t2) {
                var n2 = r3.completion;
                if ("throw" === n2.type) {
                  var o2 = n2.arg;
                  k(r3);
                }
                return o2;
              }
            }
            throw new Error("illegal catch attempt");
          }, delegateYield: function(t2, e3, r3) {
            return this.delegate = { iterator: _(t2), resultName: e3, nextLoc: r3 }, "next" === this.method && (this.arg = void 0), p;
          } }, e2;
        }
        t.exports = o, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, r) {
        "use strict";
        (function(t2) {
          var n = r(16), o = r(17), i = r(18);
          function a() {
            return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
          }
          function s(t3, e2) {
            if (a() < e2)
              throw new RangeError("Invalid typed array length");
            return u.TYPED_ARRAY_SUPPORT ? (t3 = new Uint8Array(e2)).__proto__ = u.prototype : (null === t3 && (t3 = new u(e2)), t3.length = e2), t3;
          }
          function u(t3, e2, r2) {
            if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
              return new u(t3, e2, r2);
            if ("number" == typeof t3) {
              if ("string" == typeof e2)
                throw new Error("If encoding is specified then the first argument must be a string");
              return h(this, t3);
            }
            return l(this, t3, e2, r2);
          }
          function l(t3, e2, r2, n2) {
            if ("number" == typeof e2)
              throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e2 instanceof ArrayBuffer ? function(t4, e3, r3, n3) {
              if (e3.byteLength, r3 < 0 || e3.byteLength < r3)
                throw new RangeError("'offset' is out of bounds");
              if (e3.byteLength < r3 + (n3 || 0))
                throw new RangeError("'length' is out of bounds");
              e3 = void 0 === r3 && void 0 === n3 ? new Uint8Array(e3) : void 0 === n3 ? new Uint8Array(e3, r3) : new Uint8Array(e3, r3, n3);
              u.TYPED_ARRAY_SUPPORT ? (t4 = e3).__proto__ = u.prototype : t4 = f(t4, e3);
              return t4;
            }(t3, e2, r2, n2) : "string" == typeof e2 ? function(t4, e3, r3) {
              "string" == typeof r3 && "" !== r3 || (r3 = "utf8");
              if (!u.isEncoding(r3))
                throw new TypeError('"encoding" must be a valid string encoding');
              var n3 = 0 | g(e3, r3), o2 = (t4 = s(t4, n3)).write(e3, r3);
              o2 !== n3 && (t4 = t4.slice(0, o2));
              return t4;
            }(t3, e2, r2) : function(t4, e3) {
              if (u.isBuffer(e3)) {
                var r3 = 0 | p(e3.length);
                return 0 === (t4 = s(t4, r3)).length || e3.copy(t4, 0, 0, r3), t4;
              }
              if (e3) {
                if ("undefined" != typeof ArrayBuffer && e3.buffer instanceof ArrayBuffer || "length" in e3)
                  return "number" != typeof e3.length || (n3 = e3.length) != n3 ? s(t4, 0) : f(t4, e3);
                if ("Buffer" === e3.type && i(e3.data))
                  return f(t4, e3.data);
              }
              var n3;
              throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }(t3, e2);
          }
          function c(t3) {
            if ("number" != typeof t3)
              throw new TypeError('"size" argument must be a number');
            if (t3 < 0)
              throw new RangeError('"size" argument must not be negative');
          }
          function h(t3, e2) {
            if (c(e2), t3 = s(t3, e2 < 0 ? 0 : 0 | p(e2)), !u.TYPED_ARRAY_SUPPORT)
              for (var r2 = 0; r2 < e2; ++r2)
                t3[r2] = 0;
            return t3;
          }
          function f(t3, e2) {
            var r2 = e2.length < 0 ? 0 : 0 | p(e2.length);
            t3 = s(t3, r2);
            for (var n2 = 0; n2 < r2; n2 += 1)
              t3[n2] = 255 & e2[n2];
            return t3;
          }
          function p(t3) {
            if (t3 >= a())
              throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
            return 0 | t3;
          }
          function g(t3, e2) {
            if (u.isBuffer(t3))
              return t3.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t3) || t3 instanceof ArrayBuffer))
              return t3.byteLength;
            "string" != typeof t3 && (t3 = "" + t3);
            var r2 = t3.length;
            if (0 === r2)
              return 0;
            for (var n2 = false; ; )
              switch (e2) {
                case "ascii":
                case "latin1":
                case "binary":
                  return r2;
                case "utf8":
                case "utf-8":
                case void 0:
                  return F(t3).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * r2;
                case "hex":
                  return r2 >>> 1;
                case "base64":
                  return Y(t3).length;
                default:
                  if (n2)
                    return F(t3).length;
                  e2 = ("" + e2).toLowerCase(), n2 = true;
              }
          }
          function d(t3, e2, r2) {
            var n2 = false;
            if ((void 0 === e2 || e2 < 0) && (e2 = 0), e2 > this.length)
              return "";
            if ((void 0 === r2 || r2 > this.length) && (r2 = this.length), r2 <= 0)
              return "";
            if ((r2 >>>= 0) <= (e2 >>>= 0))
              return "";
            for (t3 || (t3 = "utf8"); ; )
              switch (t3) {
                case "hex":
                  return B(this, e2, r2);
                case "utf8":
                case "utf-8":
                  return P(this, e2, r2);
                case "ascii":
                  return _(this, e2, r2);
                case "latin1":
                case "binary":
                  return T(this, e2, r2);
                case "base64":
                  return k(this, e2, r2);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return R(this, e2, r2);
                default:
                  if (n2)
                    throw new TypeError("Unknown encoding: " + t3);
                  t3 = (t3 + "").toLowerCase(), n2 = true;
              }
          }
          function y(t3, e2, r2) {
            var n2 = t3[e2];
            t3[e2] = t3[r2], t3[r2] = n2;
          }
          function v(t3, e2, r2, n2, o2) {
            if (0 === t3.length)
              return -1;
            if ("string" == typeof r2 ? (n2 = r2, r2 = 0) : r2 > 2147483647 ? r2 = 2147483647 : r2 < -2147483648 && (r2 = -2147483648), r2 = +r2, isNaN(r2) && (r2 = o2 ? 0 : t3.length - 1), r2 < 0 && (r2 = t3.length + r2), r2 >= t3.length) {
              if (o2)
                return -1;
              r2 = t3.length - 1;
            } else if (r2 < 0) {
              if (!o2)
                return -1;
              r2 = 0;
            }
            if ("string" == typeof e2 && (e2 = u.from(e2, n2)), u.isBuffer(e2))
              return 0 === e2.length ? -1 : m(t3, e2, r2, n2, o2);
            if ("number" == typeof e2)
              return e2 &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o2 ? Uint8Array.prototype.indexOf.call(t3, e2, r2) : Uint8Array.prototype.lastIndexOf.call(t3, e2, r2) : m(t3, [e2], r2, n2, o2);
            throw new TypeError("val must be string, number or Buffer");
          }
          function m(t3, e2, r2, n2, o2) {
            var i2, a2 = 1, s2 = t3.length, u2 = e2.length;
            if (void 0 !== n2 && ("ucs2" === (n2 = String(n2).toLowerCase()) || "ucs-2" === n2 || "utf16le" === n2 || "utf-16le" === n2)) {
              if (t3.length < 2 || e2.length < 2)
                return -1;
              a2 = 2, s2 /= 2, u2 /= 2, r2 /= 2;
            }
            function l2(t4, e3) {
              return 1 === a2 ? t4[e3] : t4.readUInt16BE(e3 * a2);
            }
            if (o2) {
              var c2 = -1;
              for (i2 = r2; i2 < s2; i2++)
                if (l2(t3, i2) === l2(e2, -1 === c2 ? 0 : i2 - c2)) {
                  if (-1 === c2 && (c2 = i2), i2 - c2 + 1 === u2)
                    return c2 * a2;
                } else
                  -1 !== c2 && (i2 -= i2 - c2), c2 = -1;
            } else
              for (r2 + u2 > s2 && (r2 = s2 - u2), i2 = r2; i2 >= 0; i2--) {
                for (var h2 = true, f2 = 0; f2 < u2; f2++)
                  if (l2(t3, i2 + f2) !== l2(e2, f2)) {
                    h2 = false;
                    break;
                  }
                if (h2)
                  return i2;
              }
            return -1;
          }
          function w(t3, e2, r2, n2) {
            r2 = Number(r2) || 0;
            var o2 = t3.length - r2;
            n2 ? (n2 = Number(n2)) > o2 && (n2 = o2) : n2 = o2;
            var i2 = e2.length;
            if (i2 % 2 != 0)
              throw new TypeError("Invalid hex string");
            n2 > i2 / 2 && (n2 = i2 / 2);
            for (var a2 = 0; a2 < n2; ++a2) {
              var s2 = parseInt(e2.substr(2 * a2, 2), 16);
              if (isNaN(s2))
                return a2;
              t3[r2 + a2] = s2;
            }
            return a2;
          }
          function b(t3, e2, r2, n2) {
            return z(F(e2, t3.length - r2), t3, r2, n2);
          }
          function x(t3, e2, r2, n2) {
            return z(function(t4) {
              for (var e3 = [], r3 = 0; r3 < t4.length; ++r3)
                e3.push(255 & t4.charCodeAt(r3));
              return e3;
            }(e2), t3, r2, n2);
          }
          function A(t3, e2, r2, n2) {
            return x(t3, e2, r2, n2);
          }
          function E(t3, e2, r2, n2) {
            return z(Y(e2), t3, r2, n2);
          }
          function C(t3, e2, r2, n2) {
            return z(function(t4, e3) {
              for (var r3, n3, o2, i2 = [], a2 = 0; a2 < t4.length && !((e3 -= 2) < 0); ++a2)
                r3 = t4.charCodeAt(a2), n3 = r3 >> 8, o2 = r3 % 256, i2.push(o2), i2.push(n3);
              return i2;
            }(e2, t3.length - r2), t3, r2, n2);
          }
          function k(t3, e2, r2) {
            return 0 === e2 && r2 === t3.length ? n.fromByteArray(t3) : n.fromByteArray(t3.slice(e2, r2));
          }
          function P(t3, e2, r2) {
            r2 = Math.min(t3.length, r2);
            for (var n2 = [], o2 = e2; o2 < r2; ) {
              var i2, a2, s2, u2, l2 = t3[o2], c2 = null, h2 = l2 > 239 ? 4 : l2 > 223 ? 3 : l2 > 191 ? 2 : 1;
              if (o2 + h2 <= r2)
                switch (h2) {
                  case 1:
                    l2 < 128 && (c2 = l2);
                    break;
                  case 2:
                    128 == (192 & (i2 = t3[o2 + 1])) && (u2 = (31 & l2) << 6 | 63 & i2) > 127 && (c2 = u2);
                    break;
                  case 3:
                    i2 = t3[o2 + 1], a2 = t3[o2 + 2], 128 == (192 & i2) && 128 == (192 & a2) && (u2 = (15 & l2) << 12 | (63 & i2) << 6 | 63 & a2) > 2047 && (u2 < 55296 || u2 > 57343) && (c2 = u2);
                    break;
                  case 4:
                    i2 = t3[o2 + 1], a2 = t3[o2 + 2], s2 = t3[o2 + 3], 128 == (192 & i2) && 128 == (192 & a2) && 128 == (192 & s2) && (u2 = (15 & l2) << 18 | (63 & i2) << 12 | (63 & a2) << 6 | 63 & s2) > 65535 && u2 < 1114112 && (c2 = u2);
                }
              null === c2 ? (c2 = 65533, h2 = 1) : c2 > 65535 && (c2 -= 65536, n2.push(c2 >>> 10 & 1023 | 55296), c2 = 56320 | 1023 & c2), n2.push(c2), o2 += h2;
            }
            return function(t4) {
              var e3 = t4.length;
              if (e3 <= 4096)
                return String.fromCharCode.apply(String, t4);
              var r3 = "", n3 = 0;
              for (; n3 < e3; )
                r3 += String.fromCharCode.apply(String, t4.slice(n3, n3 += 4096));
              return r3;
            }(n2);
          }
          e.Buffer = u, e.SlowBuffer = function(t3) {
            +t3 != t3 && (t3 = 0);
            return u.alloc(+t3);
          }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t2.TYPED_ARRAY_SUPPORT ? t2.TYPED_ARRAY_SUPPORT : function() {
            try {
              var t3 = new Uint8Array(1);
              return t3.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
                return 42;
              } }, 42 === t3.foo() && "function" == typeof t3.subarray && 0 === t3.subarray(1, 1).byteLength;
            } catch (t4) {
              return false;
            }
          }(), e.kMaxLength = a(), u.poolSize = 8192, u._augment = function(t3) {
            return t3.__proto__ = u.prototype, t3;
          }, u.from = function(t3, e2, r2) {
            return l(null, t3, e2, r2);
          }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, { value: null, configurable: true })), u.alloc = function(t3, e2, r2) {
            return function(t4, e3, r3, n2) {
              return c(e3), e3 <= 0 ? s(t4, e3) : void 0 !== r3 ? "string" == typeof n2 ? s(t4, e3).fill(r3, n2) : s(t4, e3).fill(r3) : s(t4, e3);
            }(null, t3, e2, r2);
          }, u.allocUnsafe = function(t3) {
            return h(null, t3);
          }, u.allocUnsafeSlow = function(t3) {
            return h(null, t3);
          }, u.isBuffer = function(t3) {
            return !(null == t3 || !t3._isBuffer);
          }, u.compare = function(t3, e2) {
            if (!u.isBuffer(t3) || !u.isBuffer(e2))
              throw new TypeError("Arguments must be Buffers");
            if (t3 === e2)
              return 0;
            for (var r2 = t3.length, n2 = e2.length, o2 = 0, i2 = Math.min(r2, n2); o2 < i2; ++o2)
              if (t3[o2] !== e2[o2]) {
                r2 = t3[o2], n2 = e2[o2];
                break;
              }
            return r2 < n2 ? -1 : n2 < r2 ? 1 : 0;
          }, u.isEncoding = function(t3) {
            switch (String(t3).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return true;
              default:
                return false;
            }
          }, u.concat = function(t3, e2) {
            if (!i(t3))
              throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t3.length)
              return u.alloc(0);
            var r2;
            if (void 0 === e2)
              for (e2 = 0, r2 = 0; r2 < t3.length; ++r2)
                e2 += t3[r2].length;
            var n2 = u.allocUnsafe(e2), o2 = 0;
            for (r2 = 0; r2 < t3.length; ++r2) {
              var a2 = t3[r2];
              if (!u.isBuffer(a2))
                throw new TypeError('"list" argument must be an Array of Buffers');
              a2.copy(n2, o2), o2 += a2.length;
            }
            return n2;
          }, u.byteLength = g, u.prototype._isBuffer = true, u.prototype.swap16 = function() {
            var t3 = this.length;
            if (t3 % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e2 = 0; e2 < t3; e2 += 2)
              y(this, e2, e2 + 1);
            return this;
          }, u.prototype.swap32 = function() {
            var t3 = this.length;
            if (t3 % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e2 = 0; e2 < t3; e2 += 4)
              y(this, e2, e2 + 3), y(this, e2 + 1, e2 + 2);
            return this;
          }, u.prototype.swap64 = function() {
            var t3 = this.length;
            if (t3 % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e2 = 0; e2 < t3; e2 += 8)
              y(this, e2, e2 + 7), y(this, e2 + 1, e2 + 6), y(this, e2 + 2, e2 + 5), y(this, e2 + 3, e2 + 4);
            return this;
          }, u.prototype.toString = function() {
            var t3 = 0 | this.length;
            return 0 === t3 ? "" : 0 === arguments.length ? P(this, 0, t3) : d.apply(this, arguments);
          }, u.prototype.equals = function(t3) {
            if (!u.isBuffer(t3))
              throw new TypeError("Argument must be a Buffer");
            return this === t3 || 0 === u.compare(this, t3);
          }, u.prototype.inspect = function() {
            var t3 = "", r2 = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t3 = this.toString("hex", 0, r2).match(/.{2}/g).join(" "), this.length > r2 && (t3 += " ... ")), "<Buffer " + t3 + ">";
          }, u.prototype.compare = function(t3, e2, r2, n2, o2) {
            if (!u.isBuffer(t3))
              throw new TypeError("Argument must be a Buffer");
            if (void 0 === e2 && (e2 = 0), void 0 === r2 && (r2 = t3 ? t3.length : 0), void 0 === n2 && (n2 = 0), void 0 === o2 && (o2 = this.length), e2 < 0 || r2 > t3.length || n2 < 0 || o2 > this.length)
              throw new RangeError("out of range index");
            if (n2 >= o2 && e2 >= r2)
              return 0;
            if (n2 >= o2)
              return -1;
            if (e2 >= r2)
              return 1;
            if (this === t3)
              return 0;
            for (var i2 = (o2 >>>= 0) - (n2 >>>= 0), a2 = (r2 >>>= 0) - (e2 >>>= 0), s2 = Math.min(i2, a2), l2 = this.slice(n2, o2), c2 = t3.slice(e2, r2), h2 = 0; h2 < s2; ++h2)
              if (l2[h2] !== c2[h2]) {
                i2 = l2[h2], a2 = c2[h2];
                break;
              }
            return i2 < a2 ? -1 : a2 < i2 ? 1 : 0;
          }, u.prototype.includes = function(t3, e2, r2) {
            return -1 !== this.indexOf(t3, e2, r2);
          }, u.prototype.indexOf = function(t3, e2, r2) {
            return v(this, t3, e2, r2, true);
          }, u.prototype.lastIndexOf = function(t3, e2, r2) {
            return v(this, t3, e2, r2, false);
          }, u.prototype.write = function(t3, e2, r2, n2) {
            if (void 0 === e2)
              n2 = "utf8", r2 = this.length, e2 = 0;
            else if (void 0 === r2 && "string" == typeof e2)
              n2 = e2, r2 = this.length, e2 = 0;
            else {
              if (!isFinite(e2))
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              e2 |= 0, isFinite(r2) ? (r2 |= 0, void 0 === n2 && (n2 = "utf8")) : (n2 = r2, r2 = void 0);
            }
            var o2 = this.length - e2;
            if ((void 0 === r2 || r2 > o2) && (r2 = o2), t3.length > 0 && (r2 < 0 || e2 < 0) || e2 > this.length)
              throw new RangeError("Attempt to write outside buffer bounds");
            n2 || (n2 = "utf8");
            for (var i2 = false; ; )
              switch (n2) {
                case "hex":
                  return w(this, t3, e2, r2);
                case "utf8":
                case "utf-8":
                  return b(this, t3, e2, r2);
                case "ascii":
                  return x(this, t3, e2, r2);
                case "latin1":
                case "binary":
                  return A(this, t3, e2, r2);
                case "base64":
                  return E(this, t3, e2, r2);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return C(this, t3, e2, r2);
                default:
                  if (i2)
                    throw new TypeError("Unknown encoding: " + n2);
                  n2 = ("" + n2).toLowerCase(), i2 = true;
              }
          }, u.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          };
          function _(t3, e2, r2) {
            var n2 = "";
            r2 = Math.min(t3.length, r2);
            for (var o2 = e2; o2 < r2; ++o2)
              n2 += String.fromCharCode(127 & t3[o2]);
            return n2;
          }
          function T(t3, e2, r2) {
            var n2 = "";
            r2 = Math.min(t3.length, r2);
            for (var o2 = e2; o2 < r2; ++o2)
              n2 += String.fromCharCode(t3[o2]);
            return n2;
          }
          function B(t3, e2, r2) {
            var n2 = t3.length;
            (!e2 || e2 < 0) && (e2 = 0), (!r2 || r2 < 0 || r2 > n2) && (r2 = n2);
            for (var o2 = "", i2 = e2; i2 < r2; ++i2)
              o2 += j(t3[i2]);
            return o2;
          }
          function R(t3, e2, r2) {
            for (var n2 = t3.slice(e2, r2), o2 = "", i2 = 0; i2 < n2.length; i2 += 2)
              o2 += String.fromCharCode(n2[i2] + 256 * n2[i2 + 1]);
            return o2;
          }
          function S(t3, e2, r2) {
            if (t3 % 1 != 0 || t3 < 0)
              throw new RangeError("offset is not uint");
            if (t3 + e2 > r2)
              throw new RangeError("Trying to access beyond buffer length");
          }
          function D(t3, e2, r2, n2, o2, i2) {
            if (!u.isBuffer(t3))
              throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e2 > o2 || e2 < i2)
              throw new RangeError('"value" argument is out of bounds');
            if (r2 + n2 > t3.length)
              throw new RangeError("Index out of range");
          }
          function L(t3, e2, r2, n2) {
            e2 < 0 && (e2 = 65535 + e2 + 1);
            for (var o2 = 0, i2 = Math.min(t3.length - r2, 2); o2 < i2; ++o2)
              t3[r2 + o2] = (e2 & 255 << 8 * (n2 ? o2 : 1 - o2)) >>> 8 * (n2 ? o2 : 1 - o2);
          }
          function M(t3, e2, r2, n2) {
            e2 < 0 && (e2 = 4294967295 + e2 + 1);
            for (var o2 = 0, i2 = Math.min(t3.length - r2, 4); o2 < i2; ++o2)
              t3[r2 + o2] = e2 >>> 8 * (n2 ? o2 : 3 - o2) & 255;
          }
          function I(t3, e2, r2, n2, o2, i2) {
            if (r2 + n2 > t3.length)
              throw new RangeError("Index out of range");
            if (r2 < 0)
              throw new RangeError("Index out of range");
          }
          function O(t3, e2, r2, n2, i2) {
            return i2 || I(t3, 0, r2, 4), o.write(t3, e2, r2, n2, 23, 4), r2 + 4;
          }
          function U(t3, e2, r2, n2, i2) {
            return i2 || I(t3, 0, r2, 8), o.write(t3, e2, r2, n2, 52, 8), r2 + 8;
          }
          u.prototype.slice = function(t3, e2) {
            var r2, n2 = this.length;
            if ((t3 = ~~t3) < 0 ? (t3 += n2) < 0 && (t3 = 0) : t3 > n2 && (t3 = n2), (e2 = void 0 === e2 ? n2 : ~~e2) < 0 ? (e2 += n2) < 0 && (e2 = 0) : e2 > n2 && (e2 = n2), e2 < t3 && (e2 = t3), u.TYPED_ARRAY_SUPPORT)
              (r2 = this.subarray(t3, e2)).__proto__ = u.prototype;
            else {
              var o2 = e2 - t3;
              r2 = new u(o2, void 0);
              for (var i2 = 0; i2 < o2; ++i2)
                r2[i2] = this[i2 + t3];
            }
            return r2;
          }, u.prototype.readUIntLE = function(t3, e2, r2) {
            t3 |= 0, e2 |= 0, r2 || S(t3, e2, this.length);
            for (var n2 = this[t3], o2 = 1, i2 = 0; ++i2 < e2 && (o2 *= 256); )
              n2 += this[t3 + i2] * o2;
            return n2;
          }, u.prototype.readUIntBE = function(t3, e2, r2) {
            t3 |= 0, e2 |= 0, r2 || S(t3, e2, this.length);
            for (var n2 = this[t3 + --e2], o2 = 1; e2 > 0 && (o2 *= 256); )
              n2 += this[t3 + --e2] * o2;
            return n2;
          }, u.prototype.readUInt8 = function(t3, e2) {
            return e2 || S(t3, 1, this.length), this[t3];
          }, u.prototype.readUInt16LE = function(t3, e2) {
            return e2 || S(t3, 2, this.length), this[t3] | this[t3 + 1] << 8;
          }, u.prototype.readUInt16BE = function(t3, e2) {
            return e2 || S(t3, 2, this.length), this[t3] << 8 | this[t3 + 1];
          }, u.prototype.readUInt32LE = function(t3, e2) {
            return e2 || S(t3, 4, this.length), (this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16) + 16777216 * this[t3 + 3];
          }, u.prototype.readUInt32BE = function(t3, e2) {
            return e2 || S(t3, 4, this.length), 16777216 * this[t3] + (this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3]);
          }, u.prototype.readIntLE = function(t3, e2, r2) {
            t3 |= 0, e2 |= 0, r2 || S(t3, e2, this.length);
            for (var n2 = this[t3], o2 = 1, i2 = 0; ++i2 < e2 && (o2 *= 256); )
              n2 += this[t3 + i2] * o2;
            return n2 >= (o2 *= 128) && (n2 -= Math.pow(2, 8 * e2)), n2;
          }, u.prototype.readIntBE = function(t3, e2, r2) {
            t3 |= 0, e2 |= 0, r2 || S(t3, e2, this.length);
            for (var n2 = e2, o2 = 1, i2 = this[t3 + --n2]; n2 > 0 && (o2 *= 256); )
              i2 += this[t3 + --n2] * o2;
            return i2 >= (o2 *= 128) && (i2 -= Math.pow(2, 8 * e2)), i2;
          }, u.prototype.readInt8 = function(t3, e2) {
            return e2 || S(t3, 1, this.length), 128 & this[t3] ? -1 * (255 - this[t3] + 1) : this[t3];
          }, u.prototype.readInt16LE = function(t3, e2) {
            e2 || S(t3, 2, this.length);
            var r2 = this[t3] | this[t3 + 1] << 8;
            return 32768 & r2 ? 4294901760 | r2 : r2;
          }, u.prototype.readInt16BE = function(t3, e2) {
            e2 || S(t3, 2, this.length);
            var r2 = this[t3 + 1] | this[t3] << 8;
            return 32768 & r2 ? 4294901760 | r2 : r2;
          }, u.prototype.readInt32LE = function(t3, e2) {
            return e2 || S(t3, 4, this.length), this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16 | this[t3 + 3] << 24;
          }, u.prototype.readInt32BE = function(t3, e2) {
            return e2 || S(t3, 4, this.length), this[t3] << 24 | this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3];
          }, u.prototype.readFloatLE = function(t3, e2) {
            return e2 || S(t3, 4, this.length), o.read(this, t3, true, 23, 4);
          }, u.prototype.readFloatBE = function(t3, e2) {
            return e2 || S(t3, 4, this.length), o.read(this, t3, false, 23, 4);
          }, u.prototype.readDoubleLE = function(t3, e2) {
            return e2 || S(t3, 8, this.length), o.read(this, t3, true, 52, 8);
          }, u.prototype.readDoubleBE = function(t3, e2) {
            return e2 || S(t3, 8, this.length), o.read(this, t3, false, 52, 8);
          }, u.prototype.writeUIntLE = function(t3, e2, r2, n2) {
            (t3 = +t3, e2 |= 0, r2 |= 0, n2) || D(this, t3, e2, r2, Math.pow(2, 8 * r2) - 1, 0);
            var o2 = 1, i2 = 0;
            for (this[e2] = 255 & t3; ++i2 < r2 && (o2 *= 256); )
              this[e2 + i2] = t3 / o2 & 255;
            return e2 + r2;
          }, u.prototype.writeUIntBE = function(t3, e2, r2, n2) {
            (t3 = +t3, e2 |= 0, r2 |= 0, n2) || D(this, t3, e2, r2, Math.pow(2, 8 * r2) - 1, 0);
            var o2 = r2 - 1, i2 = 1;
            for (this[e2 + o2] = 255 & t3; --o2 >= 0 && (i2 *= 256); )
              this[e2 + o2] = t3 / i2 & 255;
            return e2 + r2;
          }, u.prototype.writeUInt8 = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || D(this, t3, e2, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t3 = Math.floor(t3)), this[e2] = 255 & t3, e2 + 1;
          }, u.prototype.writeUInt16LE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || D(this, t3, e2, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e2] = 255 & t3, this[e2 + 1] = t3 >>> 8) : L(this, t3, e2, true), e2 + 2;
          }, u.prototype.writeUInt16BE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || D(this, t3, e2, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e2] = t3 >>> 8, this[e2 + 1] = 255 & t3) : L(this, t3, e2, false), e2 + 2;
          }, u.prototype.writeUInt32LE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || D(this, t3, e2, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e2 + 3] = t3 >>> 24, this[e2 + 2] = t3 >>> 16, this[e2 + 1] = t3 >>> 8, this[e2] = 255 & t3) : M(this, t3, e2, true), e2 + 4;
          }, u.prototype.writeUInt32BE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || D(this, t3, e2, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e2] = t3 >>> 24, this[e2 + 1] = t3 >>> 16, this[e2 + 2] = t3 >>> 8, this[e2 + 3] = 255 & t3) : M(this, t3, e2, false), e2 + 4;
          }, u.prototype.writeIntLE = function(t3, e2, r2, n2) {
            if (t3 = +t3, e2 |= 0, !n2) {
              var o2 = Math.pow(2, 8 * r2 - 1);
              D(this, t3, e2, r2, o2 - 1, -o2);
            }
            var i2 = 0, a2 = 1, s2 = 0;
            for (this[e2] = 255 & t3; ++i2 < r2 && (a2 *= 256); )
              t3 < 0 && 0 === s2 && 0 !== this[e2 + i2 - 1] && (s2 = 1), this[e2 + i2] = (t3 / a2 >> 0) - s2 & 255;
            return e2 + r2;
          }, u.prototype.writeIntBE = function(t3, e2, r2, n2) {
            if (t3 = +t3, e2 |= 0, !n2) {
              var o2 = Math.pow(2, 8 * r2 - 1);
              D(this, t3, e2, r2, o2 - 1, -o2);
            }
            var i2 = r2 - 1, a2 = 1, s2 = 0;
            for (this[e2 + i2] = 255 & t3; --i2 >= 0 && (a2 *= 256); )
              t3 < 0 && 0 === s2 && 0 !== this[e2 + i2 + 1] && (s2 = 1), this[e2 + i2] = (t3 / a2 >> 0) - s2 & 255;
            return e2 + r2;
          }, u.prototype.writeInt8 = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || D(this, t3, e2, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t3 = Math.floor(t3)), t3 < 0 && (t3 = 255 + t3 + 1), this[e2] = 255 & t3, e2 + 1;
          }, u.prototype.writeInt16LE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || D(this, t3, e2, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e2] = 255 & t3, this[e2 + 1] = t3 >>> 8) : L(this, t3, e2, true), e2 + 2;
          }, u.prototype.writeInt16BE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || D(this, t3, e2, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e2] = t3 >>> 8, this[e2 + 1] = 255 & t3) : L(this, t3, e2, false), e2 + 2;
          }, u.prototype.writeInt32LE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || D(this, t3, e2, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e2] = 255 & t3, this[e2 + 1] = t3 >>> 8, this[e2 + 2] = t3 >>> 16, this[e2 + 3] = t3 >>> 24) : M(this, t3, e2, true), e2 + 4;
          }, u.prototype.writeInt32BE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || D(this, t3, e2, 4, 2147483647, -2147483648), t3 < 0 && (t3 = 4294967295 + t3 + 1), u.TYPED_ARRAY_SUPPORT ? (this[e2] = t3 >>> 24, this[e2 + 1] = t3 >>> 16, this[e2 + 2] = t3 >>> 8, this[e2 + 3] = 255 & t3) : M(this, t3, e2, false), e2 + 4;
          }, u.prototype.writeFloatLE = function(t3, e2, r2) {
            return O(this, t3, e2, true, r2);
          }, u.prototype.writeFloatBE = function(t3, e2, r2) {
            return O(this, t3, e2, false, r2);
          }, u.prototype.writeDoubleLE = function(t3, e2, r2) {
            return U(this, t3, e2, true, r2);
          }, u.prototype.writeDoubleBE = function(t3, e2, r2) {
            return U(this, t3, e2, false, r2);
          }, u.prototype.copy = function(t3, e2, r2, n2) {
            if (r2 || (r2 = 0), n2 || 0 === n2 || (n2 = this.length), e2 >= t3.length && (e2 = t3.length), e2 || (e2 = 0), n2 > 0 && n2 < r2 && (n2 = r2), n2 === r2)
              return 0;
            if (0 === t3.length || 0 === this.length)
              return 0;
            if (e2 < 0)
              throw new RangeError("targetStart out of bounds");
            if (r2 < 0 || r2 >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (n2 < 0)
              throw new RangeError("sourceEnd out of bounds");
            n2 > this.length && (n2 = this.length), t3.length - e2 < n2 - r2 && (n2 = t3.length - e2 + r2);
            var o2, i2 = n2 - r2;
            if (this === t3 && r2 < e2 && e2 < n2)
              for (o2 = i2 - 1; o2 >= 0; --o2)
                t3[o2 + e2] = this[o2 + r2];
            else if (i2 < 1e3 || !u.TYPED_ARRAY_SUPPORT)
              for (o2 = 0; o2 < i2; ++o2)
                t3[o2 + e2] = this[o2 + r2];
            else
              Uint8Array.prototype.set.call(t3, this.subarray(r2, r2 + i2), e2);
            return i2;
          }, u.prototype.fill = function(t3, e2, r2, n2) {
            if ("string" == typeof t3) {
              if ("string" == typeof e2 ? (n2 = e2, e2 = 0, r2 = this.length) : "string" == typeof r2 && (n2 = r2, r2 = this.length), 1 === t3.length) {
                var o2 = t3.charCodeAt(0);
                o2 < 256 && (t3 = o2);
              }
              if (void 0 !== n2 && "string" != typeof n2)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof n2 && !u.isEncoding(n2))
                throw new TypeError("Unknown encoding: " + n2);
            } else
              "number" == typeof t3 && (t3 &= 255);
            if (e2 < 0 || this.length < e2 || this.length < r2)
              throw new RangeError("Out of range index");
            if (r2 <= e2)
              return this;
            var i2;
            if (e2 >>>= 0, r2 = void 0 === r2 ? this.length : r2 >>> 0, t3 || (t3 = 0), "number" == typeof t3)
              for (i2 = e2; i2 < r2; ++i2)
                this[i2] = t3;
            else {
              var a2 = u.isBuffer(t3) ? t3 : F(new u(t3, n2).toString()), s2 = a2.length;
              for (i2 = 0; i2 < r2 - e2; ++i2)
                this[i2 + e2] = a2[i2 % s2];
            }
            return this;
          };
          var N = /[^+\/0-9A-Za-z-_]/g;
          function j(t3) {
            return t3 < 16 ? "0" + t3.toString(16) : t3.toString(16);
          }
          function F(t3, e2) {
            var r2;
            e2 = e2 || 1 / 0;
            for (var n2 = t3.length, o2 = null, i2 = [], a2 = 0; a2 < n2; ++a2) {
              if ((r2 = t3.charCodeAt(a2)) > 55295 && r2 < 57344) {
                if (!o2) {
                  if (r2 > 56319) {
                    (e2 -= 3) > -1 && i2.push(239, 191, 189);
                    continue;
                  }
                  if (a2 + 1 === n2) {
                    (e2 -= 3) > -1 && i2.push(239, 191, 189);
                    continue;
                  }
                  o2 = r2;
                  continue;
                }
                if (r2 < 56320) {
                  (e2 -= 3) > -1 && i2.push(239, 191, 189), o2 = r2;
                  continue;
                }
                r2 = 65536 + (o2 - 55296 << 10 | r2 - 56320);
              } else
                o2 && (e2 -= 3) > -1 && i2.push(239, 191, 189);
              if (o2 = null, r2 < 128) {
                if ((e2 -= 1) < 0)
                  break;
                i2.push(r2);
              } else if (r2 < 2048) {
                if ((e2 -= 2) < 0)
                  break;
                i2.push(r2 >> 6 | 192, 63 & r2 | 128);
              } else if (r2 < 65536) {
                if ((e2 -= 3) < 0)
                  break;
                i2.push(r2 >> 12 | 224, r2 >> 6 & 63 | 128, 63 & r2 | 128);
              } else {
                if (!(r2 < 1114112))
                  throw new Error("Invalid code point");
                if ((e2 -= 4) < 0)
                  break;
                i2.push(r2 >> 18 | 240, r2 >> 12 & 63 | 128, r2 >> 6 & 63 | 128, 63 & r2 | 128);
              }
            }
            return i2;
          }
          function Y(t3) {
            return n.toByteArray(function(t4) {
              if ((t4 = function(t5) {
                return t5.trim ? t5.trim() : t5.replace(/^\s+|\s+$/g, "");
              }(t4).replace(N, "")).length < 2)
                return "";
              for (; t4.length % 4 != 0; )
                t4 += "=";
              return t4;
            }(t3));
          }
          function z(t3, e2, r2, n2) {
            for (var o2 = 0; o2 < n2 && !(o2 + r2 >= e2.length || o2 >= t3.length); ++o2)
              e2[o2 + r2] = t3[o2];
            return o2;
          }
        }).call(this, r(8));
      }, function(t, e, r) {
        "use strict";
        e.byteLength = function(t2) {
          var e2 = l(t2), r2 = e2[0], n2 = e2[1];
          return 3 * (r2 + n2) / 4 - n2;
        }, e.toByteArray = function(t2) {
          var e2, r2, n2 = l(t2), a2 = n2[0], s2 = n2[1], u2 = new i(function(t3, e3, r3) {
            return 3 * (e3 + r3) / 4 - r3;
          }(0, a2, s2)), c2 = 0, h = s2 > 0 ? a2 - 4 : a2;
          for (r2 = 0; r2 < h; r2 += 4)
            e2 = o[t2.charCodeAt(r2)] << 18 | o[t2.charCodeAt(r2 + 1)] << 12 | o[t2.charCodeAt(r2 + 2)] << 6 | o[t2.charCodeAt(r2 + 3)], u2[c2++] = e2 >> 16 & 255, u2[c2++] = e2 >> 8 & 255, u2[c2++] = 255 & e2;
          2 === s2 && (e2 = o[t2.charCodeAt(r2)] << 2 | o[t2.charCodeAt(r2 + 1)] >> 4, u2[c2++] = 255 & e2);
          1 === s2 && (e2 = o[t2.charCodeAt(r2)] << 10 | o[t2.charCodeAt(r2 + 1)] << 4 | o[t2.charCodeAt(r2 + 2)] >> 2, u2[c2++] = e2 >> 8 & 255, u2[c2++] = 255 & e2);
          return u2;
        }, e.fromByteArray = function(t2) {
          for (var e2, r2 = t2.length, o2 = r2 % 3, i2 = [], a2 = 0, s2 = r2 - o2; a2 < s2; a2 += 16383)
            i2.push(c(t2, a2, a2 + 16383 > s2 ? s2 : a2 + 16383));
          1 === o2 ? (e2 = t2[r2 - 1], i2.push(n[e2 >> 2] + n[e2 << 4 & 63] + "==")) : 2 === o2 && (e2 = (t2[r2 - 2] << 8) + t2[r2 - 1], i2.push(n[e2 >> 10] + n[e2 >> 4 & 63] + n[e2 << 2 & 63] + "="));
          return i2.join("");
        };
        for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s)
          n[s] = a[s], o[a.charCodeAt(s)] = s;
        function l(t2) {
          var e2 = t2.length;
          if (e2 % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var r2 = t2.indexOf("=");
          return -1 === r2 && (r2 = e2), [r2, r2 === e2 ? 0 : 4 - r2 % 4];
        }
        function c(t2, e2, r2) {
          for (var o2, i2, a2 = [], s2 = e2; s2 < r2; s2 += 3)
            o2 = (t2[s2] << 16 & 16711680) + (t2[s2 + 1] << 8 & 65280) + (255 & t2[s2 + 2]), a2.push(n[(i2 = o2) >> 18 & 63] + n[i2 >> 12 & 63] + n[i2 >> 6 & 63] + n[63 & i2]);
          return a2.join("");
        }
        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
      }, function(t, e) {
        e.read = function(t2, e2, r, n, o) {
          var i, a, s = 8 * o - n - 1, u = (1 << s) - 1, l = u >> 1, c = -7, h = r ? o - 1 : 0, f = r ? -1 : 1, p = t2[e2 + h];
          for (h += f, i = p & (1 << -c) - 1, p >>= -c, c += s; c > 0; i = 256 * i + t2[e2 + h], h += f, c -= 8)
            ;
          for (a = i & (1 << -c) - 1, i >>= -c, c += n; c > 0; a = 256 * a + t2[e2 + h], h += f, c -= 8)
            ;
          if (0 === i)
            i = 1 - l;
          else {
            if (i === u)
              return a ? NaN : 1 / 0 * (p ? -1 : 1);
            a += Math.pow(2, n), i -= l;
          }
          return (p ? -1 : 1) * a * Math.pow(2, i - n);
        }, e.write = function(t2, e2, r, n, o, i) {
          var a, s, u, l = 8 * i - o - 1, c = (1 << l) - 1, h = c >> 1, f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : i - 1, g = n ? 1 : -1, d = e2 < 0 || 0 === e2 && 1 / e2 < 0 ? 1 : 0;
          for (e2 = Math.abs(e2), isNaN(e2) || e2 === 1 / 0 ? (s = isNaN(e2) ? 1 : 0, a = c) : (a = Math.floor(Math.log(e2) / Math.LN2), e2 * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (e2 += a + h >= 1 ? f / u : f * Math.pow(2, 1 - h)) * u >= 2 && (a++, u /= 2), a + h >= c ? (s = 0, a = c) : a + h >= 1 ? (s = (e2 * u - 1) * Math.pow(2, o), a += h) : (s = e2 * Math.pow(2, h - 1) * Math.pow(2, o), a = 0)); o >= 8; t2[r + p] = 255 & s, p += g, s /= 256, o -= 8)
            ;
          for (a = a << o | s, l += o; l > 0; t2[r + p] = 255 & a, p += g, a /= 256, l -= 8)
            ;
          t2[r + p - g] |= 128 * d;
        };
      }, function(t, e) {
        var r = {}.toString;
        t.exports = Array.isArray || function(t2) {
          return "[object Array]" == r.call(t2);
        };
      }, function(t, e) {
        var r, n, o = t.exports = {};
        function i() {
          throw new Error("setTimeout has not been defined");
        }
        function a() {
          throw new Error("clearTimeout has not been defined");
        }
        function s(t2) {
          if (r === setTimeout)
            return setTimeout(t2, 0);
          if ((r === i || !r) && setTimeout)
            return r = setTimeout, setTimeout(t2, 0);
          try {
            return r(t2, 0);
          } catch (e2) {
            try {
              return r.call(null, t2, 0);
            } catch (e3) {
              return r.call(this, t2, 0);
            }
          }
        }
        !function() {
          try {
            r = "function" == typeof setTimeout ? setTimeout : i;
          } catch (t2) {
            r = i;
          }
          try {
            n = "function" == typeof clearTimeout ? clearTimeout : a;
          } catch (t2) {
            n = a;
          }
        }();
        var u, l = [], c = false, h = -1;
        function f() {
          c && u && (c = false, u.length ? l = u.concat(l) : h = -1, l.length && p());
        }
        function p() {
          if (!c) {
            var t2 = s(f);
            c = true;
            for (var e2 = l.length; e2; ) {
              for (u = l, l = []; ++h < e2; )
                u && u[h].run();
              h = -1, e2 = l.length;
            }
            u = null, c = false, function(t3) {
              if (n === clearTimeout)
                return clearTimeout(t3);
              if ((n === a || !n) && clearTimeout)
                return n = clearTimeout, clearTimeout(t3);
              try {
                n(t3);
              } catch (e3) {
                try {
                  return n.call(null, t3);
                } catch (e4) {
                  return n.call(this, t3);
                }
              }
            }(t2);
          }
        }
        function g(t2, e2) {
          this.fun = t2, this.array = e2;
        }
        function d() {
        }
        o.nextTick = function(t2) {
          var e2 = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var r2 = 1; r2 < arguments.length; r2++)
              e2[r2 - 1] = arguments[r2];
          l.push(new g(t2, e2)), 1 !== l.length || c || s(p);
        }, g.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, o.title = "browser", o.browser = true, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = d, o.addListener = d, o.once = d, o.off = d, o.removeListener = d, o.removeAllListeners = d, o.emit = d, o.prependListener = d, o.prependOnceListener = d, o.listeners = function(t2) {
          return [];
        }, o.binding = function(t2) {
          throw new Error("process.binding is not supported");
        }, o.cwd = function() {
          return "/";
        }, o.chdir = function(t2) {
          throw new Error("process.chdir is not supported");
        }, o.umask = function() {
          return 0;
        };
      }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(6), o = r.n(n), i = r(3), a = r.n(i);
        function s(t2) {
          return "" === t2 ? t2 : "true" === t2 || "1" == t2;
        }
        var u = function(t2, e2) {
          return new Promise(function(e3, r2) {
            var n2 = new XMLHttpRequest();
            n2.responseType = "blob", n2.onload = function() {
              var t3 = new FileReader();
              t3.onloadend = function() {
                e3(t3.result);
              }, t3.readAsArrayBuffer(n2.response);
            }, n2.open("GET", t2), n2.send();
          });
        }, l = r(9);
        var c = function(t2, e2, r2, n2, o2, i2, a2, s2) {
          var u2, l2 = "function" == typeof t2 ? t2.options : t2;
          if (e2 && (l2.render = e2, l2.staticRenderFns = r2, l2._compiled = true), n2 && (l2.functional = true), i2 && (l2._scopeId = "data-v-" + i2), a2 ? (u2 = function(t3) {
            (t3 = t3 || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t3 = __VUE_SSR_CONTEXT__), o2 && o2.call(this, t3), t3 && t3._registeredComponents && t3._registeredComponents.add(a2);
          }, l2._ssrRegister = u2) : o2 && (u2 = s2 ? function() {
            o2.call(this, (l2.functional ? this.parent : this).$root.$options.shadowRoot);
          } : o2), u2)
            if (l2.functional) {
              l2._injectStyles = u2;
              var c2 = l2.render;
              l2.render = function(t3, e3) {
                return u2.call(e3), c2(t3, e3);
              };
            } else {
              var h2 = l2.beforeCreate;
              l2.beforeCreate = h2 ? [].concat(h2, u2) : [u2];
            }
          return { exports: t2, options: l2 };
        }({ props: { text: { type: String, required: true }, qid: { type: String }, correctLevel: { type: Number, default: 1 }, size: { type: Number, default: 200 }, margin: { type: Number, default: 20 }, colorDark: { type: String, default: "#000000" }, colorLight: { type: String, default: "#FFFFFF" }, bgSrc: { type: String, default: void 0 }, background: { type: String, default: "rgba(0,0,0,0)" }, backgroundDimming: { type: String, default: "rgba(0,0,0,0)" }, logoSrc: { type: String, default: void 0 }, logoBackgroundColor: { type: String, default: "rgba(255,255,255,1)" }, gifBgSrc: { type: String, default: void 0 }, logoScale: { type: Number, default: 0.2 }, logoMargin: { type: Number, default: 0 }, logoCornerRadius: { type: Number, default: 8 }, whiteMargin: { type: [Boolean, String], default: true }, dotScale: { type: Number, default: 1 }, autoColor: { type: [Boolean, String], default: true }, binarize: { type: [Boolean, String], default: false }, binarizeThreshold: { type: Number, default: 128 }, callback: { type: Function, default: function() {
        } }, bindElement: { type: Boolean, default: true }, backgroundColor: { type: String, default: "#FFFFFF" }, components: { default: function() {
          return { data: { scale: 1 }, timing: { scale: 1, protectors: false }, alignment: { scale: 1, protectors: false }, cornerAlignment: { scale: 1, protectors: true } };
        } } }, name: "vue-qr", data: function() {
          return { imgUrl: "" };
        }, watch: { $props: { deep: true, handler: function() {
          this.main();
        } } }, mounted: function() {
          this.main();
        }, methods: { main: function() {
          var t2 = this;
          return o()(a.a.mark(function e2() {
            var r2, n2, o2, i2;
            return a.a.wrap(function(e3) {
              for (; ; )
                switch (e3.prev = e3.next) {
                  case 0:
                    if (!t2.gifBgSrc) {
                      e3.next = 7;
                      break;
                    }
                    return e3.next = 3, u(t2.gifBgSrc);
                  case 3:
                    return r2 = e3.sent, n2 = t2.logoSrc, t2.render(void 0, n2, r2), e3.abrupt("return");
                  case 7:
                    o2 = t2.bgSrc, i2 = t2.logoSrc, t2.render(o2, i2);
                  case 10:
                  case "end":
                    return e3.stop();
                }
            }, e2);
          }))();
        }, render: function(t2, e2, r2) {
          var n2 = this;
          return o()(a.a.mark(function o2() {
            var i2;
            return a.a.wrap(function(o3) {
              for (; ; )
                switch (o3.prev = o3.next) {
                  case 0:
                    i2 = n2, new l.a({ gifBackground: r2, text: i2.text, size: i2.size, margin: i2.margin, colorDark: i2.colorDark, colorLight: i2.colorLight, backgroundColor: i2.backgroundColor, backgroundImage: t2, backgroundDimming: i2.backgroundDimming, logoImage: e2, logoScale: i2.logoScale, logoBackgroundColor: i2.logoBackgroundColor, correctLevel: i2.correctLevel, logoMargin: i2.logoMargin, logoCornerRadius: i2.logoCornerRadius, whiteMargin: s(i2.whiteMargin), dotScale: i2.dotScale, autoColor: s(i2.autoColor), binarize: s(i2.binarize), binarizeThreshold: i2.binarizeThreshold, components: i2.components }).draw().then(function(t3) {
                      n2.imgUrl = t3, i2.callback && i2.callback(t3, i2.qid);
                    });
                  case 2:
                  case "end":
                    return o3.stop();
                }
            }, o2);
          }))();
        } } }, function() {
          var t2 = this.$createElement, e2 = this._self._c || t2;
          return this.bindElement ? e2("img", { staticStyle: { display: "inline-block" }, attrs: { src: this.imgUrl } }) : this._e();
        }, [], false, null, null, null).exports;
        c.install = function(t2) {
          return t2.component(c.name, c);
        };
        var h = c, f = [h];
        "undefined" != typeof window && window.Vue && function(t2) {
          f.map(function(e2) {
            t2.component(e2.name, e2);
          });
        }(window.Vue);
        e.default = h;
      }]);
    });
  }
});
export default require_vue_qr();
/*! Bundled license information:

vue-qr/dist/vue-qr.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <http://feross.org>
   * @license  MIT
   *)
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=vue-qr.js.map
