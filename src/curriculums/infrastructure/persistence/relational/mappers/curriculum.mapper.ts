import {Curriculum} from '../../../../domain/curriculum';
import {CurriculumEntity} from '../entities/curriculum.entity';

export class CurriculumMapper {
  static toDomain(raw: CurriculumEntity): Curriculum {
    const domainEntity = new Curriculum();
    domainEntity.name = raw.name;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Curriculum): CurriculumEntity {
    const persistenceEntity = new CurriculumEntity();
    persistenceEntity.name = domainEntity.name;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
