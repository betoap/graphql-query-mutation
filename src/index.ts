import { IResolvers, IResolverObject } from 'graphql-tools';
import { Type as _Type } from './classes/type';
import { Query as _Query } from './classes/query';
import { Mutation as _Mutation } from './classes/mutation';
import { ResolveQuery as _ResolveQuery } from './classes/resolve-query';
import { ResolveMutation as _ResolveMutation } from './classes/resolve-mutation';
import { ResolveTrivial as _ResolveTrivial } from './classes/resolve-trivial';

export const Type: _Type = _Type.getInstance();
export const Query: _Query = _Query.getInstance();
export const Mutation: _Mutation = _Mutation.getInstance();
export const ResolveQuery: _ResolveQuery = _ResolveQuery.getInstance();
export const ResolveMutation: _ResolveMutation = _ResolveMutation.getInstance();
export const ResolveTrivial: _ResolveTrivial = _ResolveTrivial.getInstance();

export const Schema = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`;
export const Resolves:IResolvers<any, any> =  {
    "Query": (<IResolverObject>ResolveQuery.getResolveQuerys()),
    "Mutation": (<IResolverObject>ResolveMutation.getResolveMutations()),
}