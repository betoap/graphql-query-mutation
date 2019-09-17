"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const annotations_1 = require("./annotations");
const index_1 = require("./index");
class Test {
    constructor() {
        this.u = [
            { id: 1, name: "node" },
            { id: 2, name: "typescript" },
            { id: 3, name: "graphql" },
            { id: 4, name: "annotation" }
        ];
    }
    User() {
        return `
            {
                id: ID!
                name: String!
                email: String!
                createAt: String!
                updateAt: String!
            }
        `;
    }
    queries() {
        return `
            users( first: Int, offset: Int ): [ User! ]!
            user( id: ID! ): User
        `;
    }
    mutation() {
        return `
            createUser( input: UserCreateInput! ): User
            updateUser( id: ID!, input: UserUpdateInput! ): User
        `;
    }
    UserCreateInput() {
        return `
            {
                name: String!
                email: String!
            }
        `;
    }
    UserUpdateInput() {
        return `
            {
                name: String!
                email: String!
            }
        `;
    }
    users(parent, params, context, info) {
        return this.u;
    }
    ;
    user(parent, params, context, info) {
        const id = parseInt(params.id);
        return this.u[id];
    }
    createUser(parent, params, context, info) {
        const id = parseInt(params.id);
        return this.u[id];
    }
    updateUser(parent, params, context, info) {
        const id = parseInt(params.id);
        return this.u[id];
    }
    post(parent, params, context, info) {
        const id = parseInt(params.id);
        return this.u[id];
    }
    comments(parent, params, context, info) {
        const id = parseInt(params.id);
        return this.u[id];
    }
}
__decorate([
    annotations_1.type,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Test.prototype, "User", null);
__decorate([
    annotations_1.query,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Test.prototype, "queries", null);
__decorate([
    annotations_1.mutation,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Test.prototype, "mutation", null);
__decorate([
    annotations_1.input,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Test.prototype, "UserCreateInput", null);
__decorate([
    annotations_1.input,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Test.prototype, "UserUpdateInput", null);
__decorate([
    annotations_1.resolveQuery,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], Test.prototype, "users", null);
__decorate([
    annotations_1.resolveQuery,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], Test.prototype, "user", null);
__decorate([
    annotations_1.resolveMutation,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], Test.prototype, "createUser", null);
__decorate([
    annotations_1.resolveMutation,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], Test.prototype, "updateUser", null);
__decorate([
    annotations_1.resolveTrivial,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], Test.prototype, "post", null);
__decorate([
    annotations_1.resolveTrivial,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], Test.prototype, "comments", null);
class RoleGraphql {
    constructor() {
        this.u = [
            { id: 1, name: "node" },
            { id: 2, name: "typescript" },
            { id: 3, name: "graphql" },
            { id: 4, name: "annotation" }
        ];
    }
    Role() {
        return `
            {
                id: ID!
                name: String!
                email: String!
                createAt: String!
                updateAt: String!
            }
        `;
    }
    queries() {
        return `
            roles( first: Int, offset: Int ): [ Role! ]!
            role( id: ID! ): Role
        `;
    }
    mutation() {
        return `
            createRole( input: RoleCreateInput! ): Role
            updateRole( id: ID!, input: RoleUpdateInput! ): Role
        `;
    }
    RoleCreateInput() {
        return `
            {
                name: String!
            }
        `;
    }
    RoleUpdateInput() {
        return `
            {
                name: String!
            }
        `;
    }
    roles(parent, params, context, info) {
        return this.u;
    }
    ;
    role(parent, params, context, info) {
        const id = parseInt(params.id);
        return this.u[id];
    }
    createRole(parent, params, context, info) {
        const id = parseInt(params.id);
        return this.u[id];
    }
    updateRole(parent, params, context, info) {
        const id = parseInt(params.id);
        return this.u[id];
    }
    post(parent, params, context, info) {
        const id = parseInt(params.id);
        return this.u[id];
    }
    comments(parent, params, context, info) {
        const id = parseInt(params.id);
        return this.u[id];
    }
}
__decorate([
    annotations_1.type,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], RoleGraphql.prototype, "Role", null);
__decorate([
    annotations_1.query,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], RoleGraphql.prototype, "queries", null);
__decorate([
    annotations_1.mutation,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], RoleGraphql.prototype, "mutation", null);
__decorate([
    annotations_1.input,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], RoleGraphql.prototype, "RoleCreateInput", null);
__decorate([
    annotations_1.input,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], RoleGraphql.prototype, "RoleUpdateInput", null);
__decorate([
    annotations_1.resolveQuery,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], RoleGraphql.prototype, "roles", null);
__decorate([
    annotations_1.resolveQuery,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], RoleGraphql.prototype, "role", null);
__decorate([
    annotations_1.resolveMutation,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], RoleGraphql.prototype, "createRole", null);
__decorate([
    annotations_1.resolveMutation,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], RoleGraphql.prototype, "updateRole", null);
__decorate([
    annotations_1.resolveTrivial,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], RoleGraphql.prototype, "post", null);
__decorate([
    annotations_1.resolveTrivial,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], RoleGraphql.prototype, "comments", null);
exports.RoleGraphql = RoleGraphql;
var types = index_1.Type.getTypes();
var querys = index_1.Query.getQueries();
var mutations = index_1.Mutation.getMutations();
var rquerys = index_1.ResolveQuery.getResolveQuerys();
var rmutations = index_1.ResolveMutation.getResolveMutations();
var rtrivials = index_1.ResolveTrivial.getResolveTrivials();
console.log(types, querys, mutations, rquerys, rmutations, rtrivials, index_1.Schema, index_1.Resolves);
//# sourceMappingURL=test.js.map