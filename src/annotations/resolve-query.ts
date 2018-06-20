import { ResolveQuery } from './../classes/resolve-query';

export function resolveQuery(target: any, key: string, descriptor: any): any {
    var originalMethod = descriptor.value;
    ResolveQuery.getInstance().append(key, originalMethod);
    return descriptor;
}