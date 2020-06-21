import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { resolve, join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  // const APP_DIR = resolve(__dirname, '..');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setViewEngine('hbs');
  const config = app.get(ConfigService);
  const viewsDirectory = config.get<string>('templates.path');
  const publicDirectory = config.get<string>('public.path');
  // app.setBaseViewsDir(resolve(__dirname, '../../', 'views'));
  // app.useStaticAssets(resolve(__dirname, '../../', 'public'));
  app.setBaseViewsDir(viewsDirectory);
  app.useStaticAssets(publicDirectory);
  await app.listen(3000);

}
bootstrap();
