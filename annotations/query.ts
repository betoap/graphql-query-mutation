import { QueryClass } from "../classes/query";

function query(target: Function, key: string, descriptor: any): any {
    var originalMethod = descriptor.value;
    QueryClass.getInstance().append(key, originalMethod);
    return descriptor;
}