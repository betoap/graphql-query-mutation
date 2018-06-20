"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResolveMutation {
    constructor() {
        this.mutations = {};
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new ResolveMutation();
        }
        ;
        return this._instance;
    }
    append(key, func) {
        this.mutations[key] = func;
    }
    getResolveMutations() {
        return this.mutations;
    }
}
exports.ResolveMutation = ResolveMutation;
//# sourceMappingURL=resolve-mutation.js.map