import { Type } from './../classes/type';

export function type(target: any, key: string, descriptor: any): any {
    var originalMethod = descriptor.value;
    Type.getInstance().append(key, originalMethod());
    return descriptor;
}