import { type, input, query, mutation, resolveQuery, resolveMutation } from './annotations';
import { Type, Query, Mutation, ResolveQuery, ResolveMutation } from './index';

class Test {

    private readonly u:Array<any> = [
        { id: 1, name: "node" },
        { id: 2, name: "typescript" },
        { id: 3, name: "graphql" },
        { id: 4, name: "annotation" }
    ];

    /**
     * user
     */
    @type
    public _user():string {
        return `
            User {
                id: ID!
                name: String!
            }
        `;
    }

    @query
    queries(): string {
        return `
            users( first: Int, offset: Int ): [ User! ]!
            user( id: ID! ): User
        `;
    }

    @mutation
    mutation(): string {
        return `
            createUser( input: UserCreateInput! ): User
            updateUser( id: ID!, input: UserUpdateInput! ): User
        `;
    }

    /**
     * UserCreateInput
     */
    @input
     public UserCreateInput(): string {
        return `
            {
                name: String!
            }
        `;
    }

    /**
     * UserUpdateInput
     */
    @input
    public UserUpdateInput(): string {
        return `
            {
                name: String!
            }
        `;
    }

    @resolveQuery
    users ( parent, params, context, info ) {
        return this.u;
    };

    @resolveQuery
    user ( parent, params, context, info ) {
        const id:number = parseInt( params.id );
        return this.u[id];
    }

    @resolveMutation
    createUser( parent, params, context, info ) {
        const id:number = parseInt( params.id );
        return this.u[id];
    }

    @resolveMutation
    updateUser( parent, params, context, info ) {
        const id:number = parseInt( params.id );
        return this.u[id];
    }
}


var types = Type.getTypes();
var querys = Query.getQueries();
var mutations = Mutation.getMutations();
var rquerys = ResolveQuery.getResolveQuerys();
var rmutations = ResolveMutation.getResolveMutations();

console.log(
    types,
    querys,
    mutations,
    rquerys,
    rmutations
);