import { ResolveTrivial } from './../classes/resolve-trivial';

export function resolveTrivial(target: any, key: string, descriptor: any): any {
    var originalMethod = descriptor.value;
    ResolveTrivial.getInstance().append(target.constructor.name.toLowerCase(), key, originalMethod);
    return descriptor;
}