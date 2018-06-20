"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Query {
    constructor() {
        this.queries = {};
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new Query();
        }
        ;
        return this._instance;
    }
    append(key, func) {
        this.queries[key] = func;
    }
    getQueries() {
        return this.queries;
    }
}
exports.Query = Query;
//# sourceMappingURL=query.js.map