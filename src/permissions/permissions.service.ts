import {Injectable} from '@nestjs/common';
import {CreatePermissionDto} from './dto/create-permission.dto';
import {UpdatePermissionDto} from './dto/update-permission.dto';
import {PermissionRepository} from './infrastructure/persistence/permission.repository';
import {IPaginationOptions} from '../utils/types/pagination-options';
import {Permission} from './domain/permission';

@Injectable()
export class PermissionsService {
  constructor(private readonly permissionRepository: PermissionRepository) {}

  create(createPermissionDto: CreatePermissionDto) {
    return this.permissionRepository.create(createPermissionDto);
  }

  findAllWithPagination({paginationOptions}: {paginationOptions: IPaginationOptions}) {
    return this.permissionRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit
      }
    });
  }

  findOne(id: Permission['id']) {
    return this.permissionRepository.findById(id);
  }

  update(id: Permission['id'], updatePermissionDto: UpdatePermissionDto) {
    return this.permissionRepository.update(id, updatePermissionDto);
  }

  remove(id: Permission['id']) {
    return this.permissionRepository.remove(id);
  }
}
