import { Controller, Get, Query } from "@nestjs/common";
import { 
  ApiExtraModels, 
  ApiOperation, 
  ApiQuery, 
  ApiResponse, 
  ApiTags, 
  getSchemaPath 
} from "@nestjs/swagger";
import { OrgsEntity, OrgsLiteEntity } from "./orgs.entity";
import { OrgsLiteService, OrgsService } from "./orgs.service";
import { ResponseOrgDto, ResponseOrgLiteDto } from "./dto/response-org.dto";

@ApiTags('Организации')
@Controller('orgs')
@ApiExtraModels(ResponseOrgDto, ResponseOrgLiteDto)
export class OrgsController {
  constructor(
    private readonly orgsService: OrgsService,
    private readonly orgsLiteService: OrgsLiteService
  ) {}

  @Get()
  @ApiOperation({ summary: 'Получить все организации' })
  @ApiQuery({
    name: 'lite',
    required: false,
    type: Boolean,
    description: 'Получить облегчённую версию списка организаций',
  })
  @ApiResponse({
    status: 200,
    description: 'Список организаций',
    // Указываем оба типа, так как ответ зависит от параметра
    schema: {
      oneOf: [
        { 
          type: 'array',
          items: { $ref: getSchemaPath(ResponseOrgDto) },
        },
        { 
          type: 'array',
          items: { $ref: getSchemaPath(ResponseOrgLiteDto) },
        },
      ],
    },
  })

  async findAll(@Query('lite') lite?: string): Promise<ResponseOrgDto[] | ResponseOrgLiteDto[]> {
    if(lite === 'true' || lite === '') {
      return this.orgsLiteService.findAll();
    };
    return this.orgsService.findAll();
  };
}