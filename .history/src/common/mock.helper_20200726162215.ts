export class MockHelper {
    public static mock<T>(mocks: { })
    {
        const bluff = MockHelper.bluff<T>();
    }

    public static bluff<T>(plain: unknowm)
    {
        return plain as unknown as T;
    }

}