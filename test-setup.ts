import addJestHbsExtension from 'jest-hbs-extension';
import { resolve } from 'path';
import { ConfigService } from './src/config/config.service';


// const VIEWS_PATH = resolve(__dirname, '..', 'views');
const configService = new ConfigService();
const viewsPath = configService.get<string>('templates.path');
addJestHbsExtension(viewsPath);
jest.setTimeout(10000); // in milliseconds




