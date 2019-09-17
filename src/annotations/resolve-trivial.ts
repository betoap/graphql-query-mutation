import { ResolveTrivial } from './../classes/resolve-trivial';

export function resolveTrivial(target: any, key: string, descriptor: any): any {
    var originalMethod = descriptor.value;
    const name = target.constructor.name;
    const objName = `${name.charAt(0).toLowerCase()}${name.substr(1)}`.replace( 'Graphql', '' );
    ResolveTrivial.getInstance().append(objName, key, originalMethod);
    return descriptor;
}