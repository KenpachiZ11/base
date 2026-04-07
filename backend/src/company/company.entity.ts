import { OrgsEntity } from "@app/orgs/orgs.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

// { id: uuidv4(), name: 'Tech Innovators', industry: 'Technology' },

@Entity({ name: 'company' })
export class CompanyEntity {
  
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id_company: string;

  @ApiProperty()
  @Column({ unique: true })
  name: string;
  
  @ApiProperty()
  @Column({ unique: true })
  registry_number: string;

  @ApiProperty()
  @Column()
  industry: string;

  @ApiProperty()
  @Column('uuid')
  id_orgs: string;

  @ManyToOne(() => OrgsEntity, (org) => org.company)
  @JoinColumn({ name: 'id_orgs' })
  org: OrgsEntity
}