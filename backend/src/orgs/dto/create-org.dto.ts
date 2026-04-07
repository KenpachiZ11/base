import { ApiProperty } from "@nestjs/swagger";
import { 
  IsString, 
  IsNotEmpty, 
  IsArray, 
  IsOptional,
  MinLength,
  MaxLength 
} from "class-validator";

export class CreateOrgDto {

  @ApiProperty({ 
    example: 'Tech Innovators',
    description: 'Название организации'
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @ApiProperty({ 
    example: 'Компания занимается разработкой ПО',
    description: 'Описание организации'
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(500)
  description: string;

  @ApiProperty({ 
    example: [],
    description: 'Список пользователей',
    required: false,
    type: [Object]
  })
  @IsArray()
  @IsOptional()
  users?: object[];

  @ApiProperty({ 
    example: [],
    description: 'Список компаний',
    required: false,
    type: [Object]
  })
  @IsArray()
  @IsOptional()
  company?: object[];
}