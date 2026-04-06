import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrgsEntity, OrgsLiteEntity } from "./orgs.entity";
import { OrgsController, OrgsLiteController } from "./orgs.controller";
import { OrgsLiteService, OrgsService } from "./orgs.service";

@Module({
  imports: [TypeOrmModule.forFeature([OrgsEntity, OrgsLiteEntity])],
  controllers: [OrgsController, OrgsLiteController],
  providers: [OrgsService, OrgsLiteService]
})

export class OrgsModule {}