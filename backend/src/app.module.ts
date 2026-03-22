import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/ormconfig';

// import { AppController } from '@app/app.controller';
// import { AppService } from '@app/app.service';

import { TagModule } from '@app/tag/tag.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    AdminModule,
    TagModule,
  ],
  controllers: [],
  providers: [],
  // controllers: [AppController],
  // providers: [AppService],
})

export class AppModule {}