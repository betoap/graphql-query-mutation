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
    _user() {
        return `
            User {
                id: ID!
                name: String!
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
            }
        `;
    }
    UserUpdateInput() {
        return `
            {
                name: String!
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
}
__decorate([
    annotations_1.type,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Test.prototype, "_user", null);
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
var types = index_1.Type.getTypes();
var querys = index_1.Query.getQueries();
var mutations = index_1.Mutation.getMutations();
var rquerys = index_1.ResolveQuery.getResolveQuerys();
var rmutations = index_1.ResolveMutation.getResolveMutations();
console.log(types, querys, mutations, rquerys, rmutations);
//# sourceMappingURL=test.js.map