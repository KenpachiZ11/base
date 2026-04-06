import { DataSource } from "typeorm";
import { OrgsEntity, OrgsLiteEntity } from "./orgs.entity";

import { v4 as uuidv4 } from 'uuid';

const orgsArray = [
  {
    id: uuidv4(),
    name: 'Tech Innovators',
    description: 'A leading technology company specializing in software development and innovation.',
    users: [
      { id: uuidv4(), name: 'Alice', email: 'alice@techinnovators.com' },
      { id: uuidv4(), name: 'Bob', email: 'bob@techinnovators.com' },
    ],
    company: [
      { id: uuidv4(), name: 'Tech Innovators', industry: 'Technology' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Green Energy Solutions',
    description: 'A company focused on providing sustainable energy solutions and services.',
    users: [
      { id: uuidv4(), name: 'Charlie', email: 'charlie@greenenergysolutions.com' },
    ],
    company: [
      { id: uuidv4(), name: 'Green Energy Solutions', industry: 'Renewable Energy' },
      { id: uuidv4(), name: 'Eco Power', industry: 'Renewable Energy' },
    ],
  }
];

const orgsLiteArray = orgsArray.map(org => ({
  id: org.id,
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
      console.log(`Организация обновлена: ${findOrg.name}`);
    } else {
      const newOrg = orgsRepository.create(orgData);
      await orgsRepository.save(newOrg);
      console.log(`Новая организация успешно создана: ${orgData.name}`);
    }
  };
};
