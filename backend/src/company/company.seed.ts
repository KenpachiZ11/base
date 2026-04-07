import { DataSource } from "typeorm";
import { CompanyEntity } from "./company.entity";

import { v4 as uuidv4 } from 'uuid';

import { ORGS_ID } from "@app/orgs/utils";
import { COMPANY_ID } from "./utils";

const companyArray = [
  { 
    id_orgs: ORGS_ID.techInnovators,
    id_company: COMPANY_ID.westTechInnovators,
    name: 'West Tech Innovators',
    registry_number: '',
    industry: 'Technology'
  },
  { 
    id_orgs: ORGS_ID.greenEnergySolutions,
    id_company: COMPANY_ID.westGreenEnergySolutions,
    name: 'West Green Energy Solutions',
    registry_number: '',
    industry: 'Renewable Energy'
  },
  { 
    id_orgs: ORGS_ID.greenEnergySolutions,
    id_company: COMPANY_ID.westEcoPower,
    name: 'West Eco Power',
    registry_number: '',
    industry: 'Renewable Energy'
  },
];

export const CompanySeed = async (dataSource: DataSource) => {
  const companyRepository = dataSource.getRepository(CompanyEntity);

  for(const companyData of companyArray) {
    const findCompany = await companyRepository.findOneBy({ name: companyData.name });

    if(findCompany) {
      findCompany.name = companyData.name;
      findCompany.industry = companyData.industry;
      findCompany.registry_number = companyData.id_company;
      await companyRepository.save(findCompany);
      console.log(`Компания обновлена: ${findCompany.name}`);
    } else {
      const newCompany = companyRepository.create(companyData);
      await companyRepository.save(newCompany);
      console.log(`Новая компания успешно создана: ${companyData.name}`);
    };
  };
};