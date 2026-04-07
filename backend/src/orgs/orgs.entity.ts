import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'orgs' })
export class OrgsEntity {
  
  @PrimaryGeneratedColumn('uuid')
  id_orgs: string;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column({ type: 'jsonb' })
  users: object[];

  @Column({ type: 'jsonb' })
  company: object[];
}

@Entity({ name: 'orgs_lite' })
export class OrgsLiteEntity {
  
  @PrimaryGeneratedColumn('uuid')
  id_orgs: string;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column({ type: 'jsonb' })
  usersCount: number;

  @Column({ type: 'jsonb' })
  companyCount: number;
}