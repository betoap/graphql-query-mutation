export class MutationClass {

    private static _instance: MutationClass;
    private mutations: Object = {};

    public static getInstance (): MutationClass {
        if ( !this._instance ) {
            this._instance = new MutationClass( );
        };
        return this._instance;
    }

    public append( key: string, func: Function ): void {
        this.mutations[key] = func;
    }

    public getMutationClasss (): Object{
        return {
            Mutation: this.mutations
        };
    }
}