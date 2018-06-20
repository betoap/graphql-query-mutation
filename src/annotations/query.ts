import { Query } from "../classes/query";

export function query(target: any, key: string, descriptor: any): any {
    var originalMethod = descriptor.value;
    Query.getInstance().append(key, originalMethod);
    return descriptor;
}