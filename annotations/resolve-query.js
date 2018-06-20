"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolve_query_1 = require("./../classes/resolve-query");
function resolveQuery(target, key, descriptor) {
    var originalMethod = descriptor.value;
    resolve_query_1.ResolveQuery.getInstance().append(key, originalMethod);
    return descriptor;
}
exports.resolveQuery = resolveQuery;
//# sourceMappingURL=resolve-query.js.map