"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./classes/type");
const query_1 = require("./classes/query");
const mutation_1 = require("./classes/mutation");
const resolve_query_1 = require("./classes/resolve-query");
const resolve_mutation_1 = require("./classes/resolve-mutation");
exports.Type = type_1.Type.getInstance();
exports.Query = query_1.Query.getInstance();
exports.Mutation = mutation_1.Mutation.getInstance();
exports.ResolveQuery = resolve_query_1.ResolveQuery.getInstance();
exports.ResolveMutation = resolve_mutation_1.ResolveMutation.getInstance();
//# sourceMappingURL=index.js.map