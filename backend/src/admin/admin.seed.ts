import { DataSource } from 'typeorm';
import { AdminEntity } from './admin.entity';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export const adminUser = async (dataSource: DataSource) => {
  const adminUser = dataSource.getRepository(AdminEntity);

  const adminsArray = [
    {
      name: 'Alex',
      role: 'admin',
      email: 'admin1@example.com',
      password: 'password1',
    },
    {
      name: 'Max',
      role: 'admin',
      email: 'admin2@example.com',
      password: 'password2',
    },
  ];

  for(const adminData of adminsArray) {
    const findAdmin = await adminUser.findOneBy({ email: adminData.email });
    const passwordHash = await bcrypt.hash(adminData.password, 10);

    if(findAdmin) {
      findAdmin.name = adminData.name;
      findAdmin.email = adminData.email;
      findAdmin.role = adminData.role;
      findAdmin.password = passwordHash;
      await adminUser.save(findAdmin);
      console.log(`Администратор обновлен: ${findAdmin.email}`);
    } else {
      const newAdmin = adminUser.create({
        id: uuidv4(),
        ...adminData,
        password: passwordHash
      });
      await adminUser.save(newAdmin);
      console.log(`Новый администратор успешно создан: ${adminData.email}`);
    };
  };
};