import { type as _type} from './type';
import { input as _input} from './input';
import { query as _query } from './query';
import { mutation as _mutation} from './mutation';
import { resolveMutation as resolve_mutation} from './resolve-mutation';
import { resolveQuery as resolve_query} from './resolve-query';
import { resolveTrivial as resolve_trivial} from './resolve-trivial';

export const type = _type;
export const input = _input;
export const query = _query;
export const mutation = _mutation;
export const resolveQuery = resolve_query;
export const resolveMutation = resolve_mutation;
export const resolveTrivial = resolve_trivial;