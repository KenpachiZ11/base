import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrgsEntity, OrgsLiteEntity } from './orgs.entity';

@Injectable()
export class OrgsService {
  constructor(
    @InjectRepository(OrgsEntity)
    private readonly orgsRepository: Repository<OrgsEntity>
  ) {}

  async findAll(): Promise<OrgsEntity[]> {
    const orgs = await this.orgsRepository.find();
    return orgs.map(org => ({
      id: org.id,
      name: org.name,
      description: org.description,
      users: org.users,
      company: org.company
    }));
  }
}

@Injectable()
export class OrgsLiteService {
  constructor(
    @InjectRepository(OrgsLiteEntity)
    private readonly orgsRepository: Repository<OrgsLiteEntity>
  ) {}

  async findAll(): Promise<OrgsLiteEntity[]> {
    const orgs = await this.orgsRepository.find();
    return orgs.map(org => ({
      id: org.id,
      name: org.name,
      description: org.description,
      usersCount: org.usersCount,
      companyCount: org.companyCount
    }));
  }
}