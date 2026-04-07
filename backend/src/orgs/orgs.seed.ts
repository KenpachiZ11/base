import { DataSource } from "typeorm";
import { OrgsEntity, OrgsLiteEntity } from "./orgs.entity";

import { v4 as uuidv4 } from 'uuid';
import { ORGS_ID } from "./utils";

const orgsArray = [
  {
    id_orgs: ORGS_ID.techInnovators,
    name: 'Tech Innovators',
    description: 'A leading technology company specializing in software development and innovation.',
    users: [
      { id: uuidv4(), name: 'Alice', email: 'alice@techinnovators.com', specialization: 'Project Manager', phone: '88888' },
      { id: uuidv4(), name: 'Bob', email: 'bob@techinnovators.com', specialization: 'Frontend', phone: '77777' },
    ],
    company: [
      { id_company: uuidv4(), name: 'Tech Innovators', registry_number: '', industry: 'Technology' },
    ],
  },
  {
    id_orgs: ORGS_ID.greenEnergySolutions,
    name: 'Green Energy Solutions',
    description: 'A company focused on providing sustainable energy solutions and services.',
    users: [
      { id: uuidv4(), name: 'Charlie', email: 'charlie@greenenergysolutions.com', specialization: 'Backend', phone: '66666' },
    ],
    company: [
      { id_company: uuidv4(), name: 'Green Energy Solutions', registry_number: '', industry: 'Renewable Energy' },
      { id_company: uuidv4(), name: 'Eco Power', registry_number: '', industry: 'Renewable Energy' },
    ],
  }
];

const orgsLiteArray = orgsArray.map(org => ({
  id_orgs: org.id_orgs,
  name: org.name || '',
  description: org.description || '',
  usersCount: org.users?.length || 0,
  companyCount: org.company?.length || 0
}));

export const OrgsSeed = async (dataSource: DataSource) => {
  const orgsRepository = dataSource.getRepository(OrgsEntity);

  for(const orgData of orgsArray) {
    const findOrg = await orgsRepository.findOneBy({ name: orgData.name });

    if(findOrg) {
      findOrg.name = orgData.name;
      findOrg.description = orgData.description;
      findOrg.users = orgData.users;
      findOrg.company = orgData.company;
      await orgsRepository.save(findOrg);
      console.log(`Организация обновлена: ${findOrg.name}`);
    } else {
      const newOrg = orgsRepository.create(orgData);
      await orgsRepository.save(newOrg);
      console.log(`Новая организация успешно создана: ${orgData.name}`);
    }
  };
};

export const OrgsLiteSeed = async (dataSource: DataSource) => {
  const orgsRepository = dataSource.getRepository(OrgsLiteEntity);

  for(const orgData of orgsLiteArray) {
    const findOrg = await orgsRepository.findOneBy({ name: orgData.name });

    if(findOrg) {
      findOrg.name = orgData.name;
      findOrg.description = orgData.description;
      findOrg.usersCount = orgData.usersCount;
      findOrg.companyCount = orgData.companyCount;
      await orgsRepository.save(findOrg);
      console.log(`Организация обновлена (lite): ${findOrg.name}`);
    } else {
      const newOrg = orgsRepository.create(orgData);
      await orgsRepository.save(newOrg);
      console.log(`Новая организация успешно создана (lite): ${orgData.name}`);
    }
  };
};
