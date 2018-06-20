export class ResolveQuery {

    private static _instance: ResolveQuery;
    private querys: Object = {};

    public static getInstance (): ResolveQuery {
        if ( !this._instance ) {
            this._instance = new ResolveQuery( );
        };
        return this._instance;
    }

    public append( key: string, func: Function ): void {
        this.querys[key] = func;
    }

    public getResolveQuerys (): Object{
        return this.querys;
    }
}