"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolve_mutation_1 = require("./../classes/resolve-mutation");
function resolveMutation(target, key, descriptor) {
    var originalMethod = descriptor.value;
    resolve_mutation_1.ResolveMutation.getInstance().append(key, originalMethod);
    return descriptor;
}
exports.resolveMutation = resolveMutation;
//# sourceMappingURL=resolve-mutation.js.map