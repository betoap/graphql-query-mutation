export class Type {

    private static _instance: Type;
    private types: Object = {};

    public static getInstance (): Type {
        if ( !this._instance ) {
            this._instance = new Type( );
        };
        return this._instance;
    }

    public append( key: string, func: Function ): void {
        this.types[key] = func;
    }

    public getTypes (): Object{
        return this.types;
    }
}