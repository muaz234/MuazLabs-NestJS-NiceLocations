import { Action } from 'rxjs/internal/scheduler/Action';

export class MockHelper {
    public static mock<T>(mocks: { [key: string]: Action)
    {
        const bluff = MockHelper.bluff<T>();
    }

    public static bluff<T>(plain: unknowm)
    {
        return plain as unknown as T;
    }

}