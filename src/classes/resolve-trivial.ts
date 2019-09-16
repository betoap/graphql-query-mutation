export class ResolveTrivial {

    private static _instance: ResolveTrivial;
    private trivial: Object = {};

    public static getInstance (): ResolveTrivial {
        if ( !this._instance ) {
            this._instance = new ResolveTrivial( );
        };
        return this._instance;
    }

    public append(object: any, key: string, func: Function ): void {
        this.trivial[object] = { ...this.trivial[object], [key]: func };
    }

    public getResolveTrivials (): Object{
        return this.trivial;
    }
}