import { resolve, join } from 'path';
import * as path from 'path';
// ${SOURCE_PATH}/**
const SOURCE_PATH = resolve(__dirname, '../', 'src');
export default {
    database: {
        url: 'postgres://app:password@localhost/locations'
    },
    orm: {
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}'
        ],
        synchronize: false
    },
    templates: {
        path: resolve(__dirname, '..', 'views')
    },
    public: {
        path: resolve(__dirname, '..', 'public')
    }
}
