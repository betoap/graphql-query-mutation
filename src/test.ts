import { type, input, query, mutation, resolveQuery, resolveMutation, resolveTrivial } from './annotations';
import { Type, Query, Mutation, ResolveQuery, ResolveMutation, ResolveTrivial, Schema, Resolves } from './index';

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
    public User():string {
        return `
            {
                id: ID!
                name: String!
                email: String!
                createAt: String!
                updateAt: String!
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
                email: String!
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
                email: String!
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

    @resolveTrivial
    post( parent, params, context, info ){
        const id:number = parseInt( params.id );
        return this.u[id];
    }

    @resolveTrivial
    comments( parent, params, context, info ){
        const id:number = parseInt( params.id );
        return this.u[id];
    }
}










export class RoleGraphql {

    private readonly u:Array<any> = [
        { id: 1, name: "node" },
        { id: 2, name: "typescript" },
        { id: 3, name: "graphql" },
        { id: 4, name: "annotation" }
    ];

    @type
    public Role():string {
        return `
            {
                id: ID!
                name: String!
                email: String!
                createAt: String!
                updateAt: String!
            }
        `;
    }
    
    @query
    queries(): string {
        return `
            roles( first: Int, offset: Int ): [ Role! ]!
            role( id: ID! ): Role
        `;
    }

    @mutation
    mutation(): string {
        return `
            createRole( input: RoleCreateInput! ): Role
            updateRole( id: ID!, input: RoleUpdateInput! ): Role
        `;
    }

    @input
     public RoleCreateInput(): string {
        return `
            {
                name: String!
            }
        `;
    }

    @input
    public RoleUpdateInput(): string {
        return `
            {
                name: String!
            }
        `;
    }

    @resolveQuery
    roles ( parent, params, context, info ) {
        return this.u;
    };

    @resolveQuery
    role ( parent, params, context, info ) {
        const id:number = parseInt( params.id );
        return this.u[id];
    }

    @resolveMutation
    createRole( parent, params, context, info ) {
        const id:number = parseInt( params.id );
        return this.u[id];
    }

    @resolveMutation
    updateRole( parent, params, context, info ) {
        const id:number = parseInt( params.id );
        return this.u[id];
    }

    @resolveTrivial
    post( parent, params, context, info ){
        const id:number = parseInt( params.id );
        return this.u[id];
    }

    @resolveTrivial
    comments( parent, params, context, info ){
        const id:number = parseInt( params.id );
        return this.u[id];
    }
}





var types = Type.getTypes();
var querys = Query.getQueries();
var mutations = Mutation.getMutations();
var rquerys = ResolveQuery.getResolveQuerys();
var rmutations = ResolveMutation.getResolveMutations();
var rtrivials = ResolveTrivial.getResolveTrivials();

console.log(
    types,
    querys,
    mutations,
    rquerys,
    rmutations,
    rtrivials,
    Schema,
    Resolves
);