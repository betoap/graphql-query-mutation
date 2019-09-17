import { Type } from './../classes/type';

export function type(target: any, key: string, descriptor: any): any {
    var originalMethod = descriptor.value;
    Type.getInstance().append(`type ${key} ${originalMethod()}`);
    return descriptor;
}