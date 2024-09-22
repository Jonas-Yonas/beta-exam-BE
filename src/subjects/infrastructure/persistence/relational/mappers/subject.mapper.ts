import {Subject} from '../../../../domain/subject';
import {SubjectEntity} from '../entities/subject.entity';

export class SubjectMapper {
  static toDomain(raw: SubjectEntity): Subject {
    const domainEntity = new Subject();
    domainEntity.name = raw.name;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Subject): SubjectEntity {
    const persistenceEntity = new SubjectEntity();
    persistenceEntity.name = domainEntity.name;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
