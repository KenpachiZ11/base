import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AdminService } from "./admin.service";
import { AdminEntity } from "./admin.entity";

@ApiTags('Admins')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {};

  @Get()
  @ApiOperation({ summary: 'Получить всех администраторов' })
  @ApiResponse({
    status: 200,
    description: 'Список администраторов',
    type: [AdminEntity]
  })

  async findAll(): Promise<AdminEntity[]> {
    return this.adminService.findAll();
  };
};