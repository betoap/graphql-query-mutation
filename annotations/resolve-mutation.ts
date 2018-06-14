import { ResolveMutation } from './../classes/resolve-mutation';

export function resolveMutation(target: any, key: string, descriptor: any): any {
    var originalMethod = descriptor.value;
    ResolveMutation.getInstance().append(key, originalMethod);
    return descriptor;
}