import { Type as _Type } from './classes/type';
import { Query as _Query } from './classes/query';
import { Mutation as _Mutation } from './classes/mutation';
import { ResolveQuery as _ResolveQuery } from './classes/resolve-query';
import { ResolveMutation as _ResolveMutation } from './classes/resolve-mutation';

export const Type: _Type = _Type.getInstance();
export const Query: _Query = _Query.getInstance();
export const Mutation: _Mutation = _Mutation.getInstance();
export const ResolveQuery: _ResolveQuery = _ResolveQuery.getInstance();
export const ResolveMutation: _ResolveMutation = _ResolveMutation.getInstance();