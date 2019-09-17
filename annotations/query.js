"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query_1 = require("../classes/query");
function query(target, key, descriptor) {
    var originalMethod = descriptor.value;
    query_1.Query.getInstance().append(originalMethod());
    return descriptor;
}
exports.query = query;
//# sourceMappingURL=query.js.map