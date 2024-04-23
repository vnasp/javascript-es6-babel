"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Impuestos = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _montoBrutoAnual = /*#__PURE__*/new WeakMap();
var _deducciones = /*#__PURE__*/new WeakMap();
// 1. Creamos la función constructora con propideduccioneses privadas con _
var Impuestos = exports.Impuestos = /*#__PURE__*/function () {
  function Impuestos(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuestos);
    _classPrivateFieldInitSpec(this, _montoBrutoAnual, void 0);
    _classPrivateFieldInitSpec(this, _deducciones, void 0);
    _classPrivateFieldSet(_montoBrutoAnual, this, montoBrutoAnual);
    _classPrivateFieldSet(_deducciones, this, deducciones);
  }

  // Método getter para obtener el monto bruto anual
  return _createClass(Impuestos, [{
    key: "montoBrutoAnual",
    get: function get() {
      return _classPrivateFieldGet(_montoBrutoAnual, this);
    }

    // Método setter para modificar el monto bruto anual
    ,
    set: function set(montoBrutoAnual) {
      _classPrivateFieldSet(_montoBrutoAnual, this, montoBrutoAnual);
    }

    // Método getter para obtener las deducciones
  }, {
    key: "deducciones",
    get: function get() {
      return _classPrivateFieldGet(_deducciones, this);
    }

    // Método setter para modificar las deducciones
    ,
    set: function set(deducciones) {
      _classPrivateFieldSet(_deducciones, this, deducciones);
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (_classPrivateFieldGet(_montoBrutoAnual, this) - _classPrivateFieldGet(_deducciones, this)) * 0.21;
    }
  }]);
}();