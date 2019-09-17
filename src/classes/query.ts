export class Query {

    private static _instance: Query;
    private queries: string = '';

    public static getInstance (): Query {
        if ( !this._instance ) {
            this._instance = new Query( );
        };
        return this._instance;
    }

    public append( func: Function ): void {
        this.queries += func;
    }

    public getQueries (): string{
        return  `
            type Query {
                ${this.queries}
            }
        `;
    }
}