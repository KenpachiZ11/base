import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

import { IBase } from '@app/interfaces/base.interface';

export abstract class Base extends BaseEntity implements IBase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
    comment: 'Дата создания записи'
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    name: 'updated_at',
    comment: 'Дата последнего обновления',
  })
  updatedAt: Date;
};