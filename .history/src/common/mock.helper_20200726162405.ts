import { Action } from 'rxjs/internal/scheduler/Action';

interface Resolves {
    resolves: any;
}
interface Returns {
    resolves: any;
}
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