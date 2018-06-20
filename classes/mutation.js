"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mutation {
    constructor() {
        this.mutations = {};
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new Mutation();
        }
        ;
        return this._instance;
    }
    append(key, func) {
        this.mutations[key] = func;
    }
    getMutations() {
        return this.mutations;
    }
}
exports.Mutation = Mutation;
//# sourceMappingURL=mutation.js.map