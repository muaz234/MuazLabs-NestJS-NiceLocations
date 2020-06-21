import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { resolve, join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const APP_DIR = resolve(__dirname, '..');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setViewEngine('hbs');
  app.setBaseViewsDir(join(__dirname, '../../', 'views'));
  app.useStaticAssets(join(__dirname, '../../', 'public'));
  await app.listen(3000);

}
bootstrap();
