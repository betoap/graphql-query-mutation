export class Mutation {

    private static _instance: Mutation;
    private mutations: string = '';

    public static getInstance (): Mutation {
        if ( !this._instance ) {
            this._instance = new Mutation( );
        };
        return this._instance;
    }

    public append( func: Function ): void {
        this.mutations += func;
    }

    public getMutations (): string{
        return `
        type Mutation {
            ${this.mutations}
        }`;
    }
}