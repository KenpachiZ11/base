import { Entity, Column, OneToMany, Index } from 'typeorm';
import { Base } from './base.entity';
import { IOrganization } from '@app/interfaces/organization.interface';

@Entity({ name: 'orgs' })
@Index(['name'])
export class Organization extends Base implements Omit<IOrganization, 'id' | 'createdAt' | 'updatedAt'> {
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    comment: 'Название организации',
  })
  name: string;

  @Column({
    type: 'text',
    nullable: true,
    comment: 'Описание организации',
  })
  description: string;

  // @OneToMany(() => OrgUser, (orgUser) => orgUser.organization, {
  //   cascade: ['insert', 'update'],
  //   eager: false,
  // })
  // users: OrgUser[];

  // /**
  //  * Дочерние компании организации
  //  */
  // @OneToMany(() => Company, (company) => company.organization, {
  //   cascade: ['insert', 'update'],
  //   eager: false,
  // })
  // companies: Company[];
}