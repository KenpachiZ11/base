if(!process.env.IS_TS_NODE) {
  require('module-alias/register');
};

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';
import { DataSource } from 'typeorm';
import { adminUser } from './admin/admin.seed';
import { OrgsLiteSeed, OrgsSeed } from './orgs/orgs.seed';
import { CompanySeed } from './company/company.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  // Админка + Загрузка начальных данных
  const dataSource = app.get(DataSource);
  await adminUser(dataSource);
  await OrgsSeed(dataSource);
  await OrgsLiteSeed(dataSource);
  await CompanySeed(dataSource);

  console.log('🚀 Application started!');
  await app.listen(process.env.PORT ?? 4001); // Запуск на данный момент на 4001 порту
};

bootstrap();