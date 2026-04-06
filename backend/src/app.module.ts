import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/ormconfig';

import { AdminModule } from './admin/admin.module';
import { OrgsModule } from './orgs/orgs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    AdminModule,
    OrgsModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}