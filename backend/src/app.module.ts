import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/ormconfig';

import { AdminModule } from './admin/admin.module';
import { OrgsModule } from './orgs/orgs.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    AdminModule,
    OrgsModule,
    CompanyModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}