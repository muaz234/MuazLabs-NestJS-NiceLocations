export class GenericFactory {
    public static create<T>(className: new () => {}, plain: unknown)
    {
        const instance = new className()
    }
}