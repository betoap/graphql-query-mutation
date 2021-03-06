"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./classes/type");
const query_1 = require("./classes/query");
const mutation_1 = require("./classes/mutation");
const resolve_query_1 = require("./classes/resolve-query");
const resolve_mutation_1 = require("./classes/resolve-mutation");
const resolve_trivial_1 = require("./classes/resolve-trivial");
exports.Type = type_1.Type.getInstance();
exports.Query = query_1.Query.getInstance();
exports.Mutation = mutation_1.Mutation.getInstance();
exports.ResolveQuery = resolve_query_1.ResolveQuery.getInstance();
exports.ResolveMutation = resolve_mutation_1.ResolveMutation.getInstance();
exports.ResolveTrivial = resolve_trivial_1.ResolveTrivial.getInstance();
exports.Schema = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`;
exports.Resolves = {
    "Query": exports.ResolveQuery.getResolveQuerys(),
    "Mutation": exports.ResolveMutation.getResolveMutations(),
};
//# sourceMappingURL=index.js.map