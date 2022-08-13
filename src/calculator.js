"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.value = 0;
    }
    Calculator.prototype.add = function (arg0) {
        this.value += arg0;
        return this.value;
    };
    Calculator.prototype.subtract = function (arg0) {
        this.value -= arg0;
        return this.value;
    };
    Calculator.prototype.multiply = function (arg0) {
        this.value *= arg0;
        return this.value;
    };
    Calculator.prototype.divide = function (arg0) {
        this.value /= arg0;
        return this.value;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
