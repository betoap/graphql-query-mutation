"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResolveQuery {
    constructor() {
        this.querys = {};
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new ResolveQuery();
        }
        ;
        return this._instance;
    }
    append(key, func) {
        this.querys[key] = func;
    }
    getResolveQuerys() {
        return this.querys;
    }
}
exports.ResolveQuery = ResolveQuery;
//# sourceMappingURL=resolve-query.js.map