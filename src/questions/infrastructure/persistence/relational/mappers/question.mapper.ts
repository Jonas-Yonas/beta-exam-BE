import {Question} from '../../../../domain/question';
import {QuestionEntity} from '../entities/question.entity';

export class QuestionMapper {
  static toDomain(raw: QuestionEntity): Question {
    const domainEntity = new Question();
    domainEntity.answer = raw.answer;
    domainEntity.explanation = raw.explanation;
    domainEntity.reference = raw.reference;
    domainEntity.content = raw.content;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Question): QuestionEntity {
    const persistenceEntity = new QuestionEntity();
    persistenceEntity.answer = domainEntity.answer;
    persistenceEntity.explanation = domainEntity.explanation;
    persistenceEntity.reference = domainEntity.reference;
    persistenceEntity.content = domainEntity.content;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
