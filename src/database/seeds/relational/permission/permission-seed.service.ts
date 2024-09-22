import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {PermissionEntity} from '../../../../permissions/infrastructure/persistence/relational/entities/permission.entity';
import {Repository} from 'typeorm';

@Injectable()
export class PermissionSeedService {
  constructor(
    @InjectRepository(PermissionEntity)
    private permissionRepository: Repository<PermissionEntity>
  ) {}

  async run() {
    const permissions = [
      {name: 'manage_courses', description: 'Permission to manage courses'},
      {name: 'view_courses', description: 'Permission to view courses'},
      {name: 'view_grades', description: 'Permission to view grades'}
    ];

    await this.permissionRepository.save(permissions);
  }
}
