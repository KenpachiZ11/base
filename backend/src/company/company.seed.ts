import { DataSource } from "typeorm";
import { CompanyEntity } from "./company.entity";

import { v4 as uuidv4 } from 'uuid';

import { ORGS_ID } from "@app/orgs/utils";
import { COMPANY_ID } from "./utils";
import { OrgsLiteEntity } from "@app/orgs/orgs.entity";

const companyArray = [
  { 
    id_orgs: ORGS_ID.techInnovators,
    id_company: COMPANY_ID.westTechInnovators,
    name: 'West Tech Innovators',
    registry_number: 'REG-NUM_1',
    industry: 'Technology'
  },
  { 
    id_orgs: ORGS_ID.greenEnergySolutions,
    id_company: COMPANY_ID.westGreenEnergySolutions,
    name: 'West Green Energy Solutions',
    registry_number: 'REG-NUM_2',
    industry: 'Renewable Energy'
  },
  { 
    id_orgs: ORGS_ID.greenEnergySolutions,
    id_company: COMPANY_ID.westEcoPower,
    name: 'West Eco Power',
    registry_number: 'REG-NUM_3',
    industry: 'Renewable Energy'
  },
];

export const CompanySeed = async (dataSource: DataSource) => {
  const companyRepository = dataSource.getRepository(CompanyEntity);
  const orgsRepository = dataSource.getRepository(OrgsLiteEntity);

  for(const companyData of companyArray) {

    // Проверка организации
    const checkedOrd = await orgsRepository.findOneBy({
      id_orgs: companyData.id_orgs
    });

    if(!checkedOrd) {
      console.warn(`Организация не найдена: ${companyData.id_orgs} — пропускаем`);
      continue;
    };

    const findCompany = await companyRepository.findOneBy({ name: companyData.name });

    if(findCompany) {
      findCompany.name = companyData.name;
      findCompany.industry = companyData.industry;
      findCompany.registry_number = companyData.registry_number;
      await companyRepository.save(findCompany);
      console.log(`Компания обновлена: ${findCompany.name}`);
    } else {
      const newCompany = companyRepository.create(companyData);
      await companyRepository.save(newCompany);
      console.log(`Новая компания успешно создана: ${companyData.name}`);
    };
  };
};