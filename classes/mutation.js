"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mutation {
    constructor() {
        this.mutations = '';
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new Mutation();
        }
        ;
        return this._instance;
    }
    append(func) {
        this.mutations += func;
    }
    getMutations() {
        return `
        type Mutation {
            ${this.mutations}
        }`;
    }
}
exports.Mutation = Mutation;
//# sourceMappingURL=mutation.js.map