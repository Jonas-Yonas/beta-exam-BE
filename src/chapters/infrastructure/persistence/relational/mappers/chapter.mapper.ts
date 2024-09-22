import {Chapter} from '../../../../domain/chapter';
import {ChapterEntity} from '../entities/chapter.entity';

export class ChapterMapper {
  static toDomain(raw: ChapterEntity): Chapter {
    const domainEntity = new Chapter();
    domainEntity.name = raw.name;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Chapter): ChapterEntity {
    const persistenceEntity = new ChapterEntity();
    persistenceEntity.name = domainEntity.name;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
