"use strict";
/**
 * Calculator is a class object that is used by the main application to calculate the Returned value
 * - "add": adds the input to the object property value
 * - "subtract": reduces the value of the object property value by the input amount
 * - "multiply": increases the object propert value by the input multiplier argument
 * - "divide": divides the object property value by the input divisor argument
 */
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
