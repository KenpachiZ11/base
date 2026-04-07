import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ResponseOrgDto {
  @ApiProperty({
    example: 'b4043d3f-66bb-49a2-8b04-3b42a62f474b',
    description: 'ID организации'
  })
  id_orgs: string;

  @ApiProperty({
    example: 'Tech Innovators',
    description: 'Название организации'
  })
  name: string;

  @ApiProperty({ 
    example: 'Компания занимается разработкой ПО',
    description: 'Описание организации'
  })
  description: string;

  @ApiPropertyOptional({ 
    type: [Object],
    description: 'Список пользователей',
    default: []
  })
  users?: object[];

  @ApiPropertyOptional({ 
    type: [Object],
    description: 'Список компаний',
    default: []
  })
  company?: object[];
}

export class ResponseOrgLiteDto {

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  id_orgs: string;

  @ApiProperty({ 
    example: 'Tech Innovators',
  })
  name: string;

  @ApiProperty({ 
    example: 'Компания занимается разработкой ПО',
  })
  description: string;

  @ApiProperty({ 
    example: 10,
    description: 'Количество пользователей'
  })
  usersCount: number;

  @ApiProperty({ 
    example: 5,
    description: 'Количество компаний'
  })
  companyCount: number;
}