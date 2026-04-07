import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrgsEntity, OrgsLiteEntity } from './orgs.entity';
import { CreateOrgDto } from './dto/create-org.dto';
import { ResponseOrgDto } from './dto/response-org.dto';

@Injectable()
export class OrgsService {
  constructor(
    @InjectRepository(OrgsEntity)
    private readonly orgsRepository: Repository<OrgsEntity>
  ) {}

  async create(dto: CreateOrgDto): Promise<ResponseOrgDto> {
    const newOrg = this.orgsRepository.create({
      ...dto,
      users: dto.users ?? [],
      company: dto.company ?? []
    });

    return await this.orgsRepository.save(newOrg);
  }

  async findAll(): Promise<OrgsEntity[]> {
    const orgs = await this.orgsRepository.find();
    return orgs.map(org => ({
      id_orgs: org.id_orgs,
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
      id_orgs: org.id_orgs,
      name: org.name,
      description: org.description,
      usersCount: org.usersCount,
      companyCount: org.companyCount
    }));
  }
}