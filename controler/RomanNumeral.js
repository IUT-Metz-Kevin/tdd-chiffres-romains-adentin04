"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RomanNumeral = void 0;
var RomanNumeral = /** @class */ (function () {
    function RomanNumeral() {
        this._numereuxRomain = ['I', 'IV', 'V', 'X', 'L', 'C', 'D', 'M'];
        this._numereux = [1, 4, 5, 10, 50, 100, 500, 1000];
    }
    RomanNumeral.prototype.getNumRomain = function () {
        return this._numereuxRomain;
    };
    RomanNumeral.prototype.of = function (value) {
        var result = 0;
        var i = 0;
        while (i < value.length) {
            var twoChar = value.substring(i, i + 2);
            var oneChar = value.substring(i, i + 1);
            console.log(twoChar, oneChar);
            var indexTwo = this._numereuxRomain.indexOf(twoChar);
            if (indexTwo !== -1) {
                result += this._numereux[indexTwo];
                i += 2;
                continue;
            }
            var indexOne = this._numereuxRomain.indexOf(oneChar);
            if (indexOne !== -1) {
                result += this._numereux[indexOne];
                i += 1;
            }
            else {
                throw new Error("Caract\u00E8re romain invalide: ".concat(oneChar));
            }
        }
        return result;
    };
    return RomanNumeral;
}());
exports.RomanNumeral = RomanNumeral;
var n = new RomanNumeral();
n.of('CCL');
