if(!process.env.IS_TS_NODE) {
  require('module-alias/register');
};

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  await app.listen(process.env.PORT ?? 4001); // Запуск на данный момент на 4001 порту
};

bootstrap();