import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrgsEntity, OrgsLiteEntity } from "./orgs.entity";
import { OrgsController } from "./orgs.controller";
import { OrgsLiteService, OrgsService } from "./orgs.service";

@Module({
  imports: [TypeOrmModule.forFeature([OrgsEntity, OrgsLiteEntity])],
  controllers: [OrgsController],
  providers: [OrgsService, OrgsLiteService]
})

export class OrgsModule {}