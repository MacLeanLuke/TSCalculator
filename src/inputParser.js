"use strict";
exports.__esModule = true;
exports.InputParser = void 0;
var InputParser = /** @class */ (function () {
    function InputParser() {
        this.inputArray = [];
        this.operatorArray = [];
        this.numberArray = [];
        this.otherArray = [];
    }
    InputParser.prototype.recieveInput = function (inputString) {
        this.inputArray = inputString.split(" ");
        for (var i = 0; i < this.inputArray.length; i++) {
            // console.log(this.inputArray[i])
            if (this.isNumber(this.inputArray[i])) {
                this.numberArray.push(this.inputArray[i]);
            }
            else if (this.isOperator(this.inputArray[i])) {
                this.operatorArray.push(this.inputArray[i]);
            }
            else {
                this.otherArray.push(this.inputArray[i]);
            }
        }
    };
    InputParser.prototype.isNumber = function (str) {
        var maybeFloat = parseFloat(str);
        var isNum = !isNaN(maybeFloat);
        return isNum;
    };
    InputParser.prototype.isOperator = function (operator) {
        switch (operator) {
            case '+':
            case '-':
            case '*':
            case '/':
                return true;
            default:
                return false;
        }
    };
    return InputParser;
}());
exports.InputParser = InputParser;
