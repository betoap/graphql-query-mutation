"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./../classes/type");
function type(target, key, descriptor) {
    var originalMethod = descriptor.value;
    type_1.Type.getInstance().append(key, originalMethod());
    return descriptor;
}
exports.type = type;
//# sourceMappingURL=type.1.js.map