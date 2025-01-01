"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRandomNumber = makeRandomNumber;
var MAX_AGE = 100;
function makeRandomNumber(max) {
    if (max === void 0) { max = MAX_AGE; }
    return Math.ceil((Math.random() * max));
}
//# sourceMappingURL=makeRandomNumber.js.map