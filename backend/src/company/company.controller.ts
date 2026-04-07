import { Controller, Get, Query } from "@nestjs/common";
import { 
  ApiExtraModels, 
  ApiOperation, 
  ApiQuery, 
  ApiResponse, 
  ApiTags, 
  getSchemaPath 
} from "@nestjs/swagger";
import { CompanyEntity } from "./company.entity";
import { CompanyService } from "./company.service";

@ApiTags('Компания')
@Controller('company')
@ApiExtraModels(CompanyEntity)
export class CompanyController {
  constructor (
    private readonly companyService: CompanyService
  ) {}

  @Get()
  @ApiOperation({ summary: 'Получить все дочерние компании' })
  @ApiResponse({
    status: 200,
    description: 'Список дочерних компаний',
    schema: {
      oneOf: [
        {
          type: 'array',
          items: { $ref: getSchemaPath(CompanyEntity) }
        }
      ]
    }
  })

  async findAll(): Promise<CompanyEntity[]> {
    return this.companyService.findAll();
  }
}