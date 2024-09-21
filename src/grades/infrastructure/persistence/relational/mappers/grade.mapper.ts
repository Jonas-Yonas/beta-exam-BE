import { Grade } from '../../../../domain/grade';
import { GradeEntity } from '../entities/grade.entity';

export class GradeMapper {
  static toDomain(raw: GradeEntity): Grade {
    const domainEntity = new Grade();
domainEntity.name = raw.name;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Grade): GradeEntity {
    const persistenceEntity = new GradeEntity();
persistenceEntity.name = domainEntity.name;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
