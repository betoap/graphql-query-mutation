"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mutation_1 = require("./../classes/mutation");
function mutation(target, key, descriptor) {
    var originalMethod = descriptor.value;
    mutation_1.Mutation.getInstance().append(originalMethod());
    return descriptor;
}
exports.mutation = mutation;
//# sourceMappingURL=mutation.js.map