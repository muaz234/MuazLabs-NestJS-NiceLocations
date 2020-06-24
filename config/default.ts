import { resolve, join } from 'path';

const SOURCE_PATH = resolve(__dirname, '/..', 'src');
export default {
    database: {
        url: 'postgres://app:password@localhost/locations'
    },
    orm: {
        entities: [`${SOURCE_PATH}/**/*.entity{.ts,.js}`],
        synchronize: false
    },
    templates: {
        path: resolve(__dirname, '..', 'views')
    },
    public: {
        path: resolve(__dirname, '..', 'public')
    }
}