export class Query {

    private static _instance: Query;
    private queries: Object = {};

    public static getInstance (): Query {
        if ( !this._instance ) {
            this._instance = new Query( );
        };
        return this._instance;
    }

    public append( key: string, func: Function ): void {
        this.queries[key] = func;
    }

    public getQueries (): Object{
        return this.queries;
    }
}