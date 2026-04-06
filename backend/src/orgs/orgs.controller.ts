import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { OrgsEntity, OrgsLiteEntity } from "./orgs.entity";
import { OrgsLiteService, OrgsService } from "./orgs.service";

@ApiTags('Организации')
@Controller('orgs')
export class OrgsController {
  constructor(private readonly orgsService: OrgsService) {}

  @Get()
  @ApiOperation({ summary: 'Получить все организации' })
  @ApiResponse({
    status: 200,
    description: 'Список организаций',
    type: [OrgsEntity]
  })

  async findAll(): Promise<OrgsEntity[]> {
    return this.orgsService.findAll();
  };
};

@ApiTags('Организации')
@Controller('orgs-lite')
export class OrgsLiteController {
  constructor(private readonly orgsLiteService: OrgsLiteService) {}

  @Get()
  @ApiOperation({ summary: 'Получить все организации (lite)' })
  @ApiResponse({
    status: 200,
    description: 'Список организаций (lite)',
    type: [OrgsLiteEntity]
  })
  
  async findAll(): Promise<OrgsLiteEntity[]> {
    return this.orgsLiteService.findAll();
  };
};