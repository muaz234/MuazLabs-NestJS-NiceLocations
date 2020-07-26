export class MockHelper {
    public static mock<T>()
    {
        const bluff = MockHelper.bluff<T>(/T> as )
    }

    public static bluff<T>(plain: unknowm)
    {
        return plain as unknown as T;
    }

}