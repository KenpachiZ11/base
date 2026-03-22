import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from './admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private readonly adminRepository: Repository<AdminEntity>
  ) {}

  async findAll(): Promise<AdminEntity[]> {
    const admins = await this.adminRepository.find();
    return admins.map(admin => ({
      id: admin.id,
      name: admin.name,
      role: admin.role,
      email: admin.email,
      password: admin.password
    }));
  }
}