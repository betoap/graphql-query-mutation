export class ResolveMutation {

    private static _instance: ResolveMutation;
    private mutations: Object = {};

    public static getInstance (): ResolveMutation {
        if ( !this._instance ) {
            this._instance = new ResolveMutation( );
        };
        return this._instance;
    }

    public append( key: string, func: Function ): void {
        this.mutations[key] = func;
    }

    public getResolveMutations (): Object{
        return this.mutations;
    }
}