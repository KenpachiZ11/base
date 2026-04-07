import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyEntity } from './company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>
  ) {}

  async findAll(): Promise<CompanyEntity[]> {
    const companies = await this.companyRepository.find();
    return companies.map(company => ({
      id_orgs: company.id_orgs,
      id_company: company.id_company,
      name: company.name,
      registry_number: company.registry_number,
      industry: company.industry,
      org: company.org
    }));
  }
}