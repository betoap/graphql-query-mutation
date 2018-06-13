import { MutationClass } from './../classes/mutation';

function mutation(target: Function, key: string, descriptor: any): any {
    var originalMethod = descriptor.value;
    MutationClass.getInstance().append(key, originalMethod);
    return descriptor;
}