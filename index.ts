import { MutationClass } from './classes/mutation';
import { QueryClass } from './classes/query';
export const Query: QueryClass = QueryClass.getInstance();
export const Mutation: MutationClass = MutationClass.getInstance();

console.log(Query, Mutation);