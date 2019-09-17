import { Type } from './../classes/type';

export function input(target: any, key: string, descriptor: any): any {
    var originalMethod = descriptor.value;
    Type.getInstance().append(`input ${key} ${originalMethod()}`);
    return descriptor;
}