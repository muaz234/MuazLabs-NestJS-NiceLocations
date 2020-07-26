import { Action } from "rxjs/internal/scheduler/Action";
import { mapValues } from "lodash";

interface Resolves {
    resolves: any;
}
interface Returns {
    returns: any;
}
interface Rejects {
    rejects: any;
}
interface Throws {
    throws: any;
}
export class MockHelper {

    
    public static mock<T>(mocks: { [key: string]: Action)
    {
        const bluff = MockHelper.bluff<T>(mapValues(mocks () => new Function));
    }

    public static bluff<T>(plain: unknowm)
    {
        return plain as unknown as T;
    }

}