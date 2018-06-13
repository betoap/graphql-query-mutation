import { Mutation as _Mutation } from './classes/mutation';
import { Query as _Query } from './classes/query';

export const Query: _Query = _Query.getInstance();
export const Mutation: _Mutation = _Mutation.getInstance();