export class Type {

    private static _instance: Type;
    private types: string = '';

    public static getInstance (): Type {
        if ( !this._instance ) {
            this._instance = new Type();
        };
        return this._instance;
    }

    public append( func: string ): void {
        this.types += func;
    }

    public getTypes (): Object{
        return this.types;
    }
}