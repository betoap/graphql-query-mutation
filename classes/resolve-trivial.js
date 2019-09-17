"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResolveTrivial {
    constructor() {
        this.trivial = {};
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new ResolveTrivial();
        }
        ;
        return this._instance;
    }
    append(object, key, func) {
        if (!this.trivial[object])
            this.trivial[object] = {};
        this.trivial[object] = Object.assign({}, this.trivial[object], { [key]: func });
    }
    getResolveTrivials() {
        return this.trivial;
    }
}
exports.ResolveTrivial = ResolveTrivial;
//# sourceMappingURL=resolve-trivial.js.map