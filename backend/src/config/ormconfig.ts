import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'myuser',
  password: 'mypassword',
  database: 'mydb',
  entities: [__dirname + '../../**/*.entity{.ts, .js}'],
  synchronize: true,
  // url: 'postgresql://myuser:mypassword@localhost:5432/mydb'
};