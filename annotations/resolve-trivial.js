"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolve_trivial_1 = require("./../classes/resolve-trivial");
function resolveTrivial(target, key, descriptor) {
    var originalMethod = descriptor.value;
    resolve_trivial_1.ResolveTrivial.getInstance().append(target.constructor.name.toLowerCase(), key, originalMethod);
    return descriptor;
}
exports.resolveTrivial = resolveTrivial;
//# sourceMappingURL=resolve-trivial.js.map