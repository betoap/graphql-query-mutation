export class QueryClass {

    private static _instance: QueryClass;
    private queries: Object = {};

    public static getInstance (): QueryClass {
        if ( !this._instance ) {
            this._instance = new QueryClass( );
        };
        return this._instance;
    }

    public append( key: string, func: Function ): void {
        this.queries[key] = func;
    }

    public getQueries (): Object{
        return {
            Query: this.queries
        };
    }
}