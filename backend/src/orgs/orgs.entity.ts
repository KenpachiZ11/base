import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'orgs' })
export class OrgsEntity {
  
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id_orgs: string;

  @ApiProperty()
  @Column({ unique: true })
  name: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiPropertyOptional()
  @Column({ type: 'jsonb' })
  users: object[];

  @ApiPropertyOptional()
  @Column({ type: 'jsonb' })
  company: object[];
}

@Entity({ name: 'orgs_lite' })
export class OrgsLiteEntity {
  
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id_orgs: string;

  @ApiProperty()
  @Column({ unique: true })
  name: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiPropertyOptional()
  @Column({ type: 'jsonb' })
  usersCount: number;

  @ApiPropertyOptional()
  @Column({ type: 'jsonb' })
  companyCount: number;
}