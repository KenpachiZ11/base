import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CompanyEntity } from "./company.entity";
import { CompanyService } from "./company.service";
import { CompanyController } from "./company.controller";

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity])],
  controllers: [CompanyController],
  providers: [CompanyService]
})

export class CompanyModule {}