import { Mutation } from './../classes/mutation';

export function mutation(target: Function, key: string, descriptor: any): any {
    var originalMethod = descriptor.value;
    Mutation.getInstance().append(key, originalMethod);
    return descriptor;
}