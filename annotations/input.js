"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./../classes/type");
function input(target, key, descriptor) {
    var originalMethod = descriptor.value;
    type_1.Type.getInstance().append(`input ${key} ${originalMethod()}`);
    return descriptor;
}
exports.input = input;
//# sourceMappingURL=input.js.map