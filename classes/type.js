"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Type {
    constructor() {
        this.types = '';
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new Type();
        }
        ;
        return this._instance;
    }
    append(key, func) {
        this.types += `${func};`;
    }
    getTypes() {
        return this.types;
    }
}
exports.Type = Type;
//# sourceMappingURL=type.js.map