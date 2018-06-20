export class Mutation {

    private static _instance: Mutation;
    private mutations: Object = {};

    public static getInstance (): Mutation {
        if ( !this._instance ) {
            this._instance = new Mutation( );
        };
        return this._instance;
    }

    public append( key: string, func: Function ): void {
        this.mutations[key] = func;
    }

    public getMutations (): Object{
        return this.mutations;
    }
}