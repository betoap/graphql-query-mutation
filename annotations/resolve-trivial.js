"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolve_trivial_1 = require("./../classes/resolve-trivial");
function resolveTrivial(target, key, descriptor) {
    var originalMethod = descriptor.value;
    const name = target.constructor.name;
    const objName = `${name.charAt(0).toLowerCase()}${name.substr(1)}`.replace('Graphql', '');
    resolve_trivial_1.ResolveTrivial.getInstance().append(objName, key, originalMethod);
    return descriptor;
}
exports.resolveTrivial = resolveTrivial;
//# sourceMappingURL=resolve-trivial.js.map