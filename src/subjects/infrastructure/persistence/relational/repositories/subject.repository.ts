import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {SubjectEntity} from '../entities/subject.entity';
import {NullableType} from '../../../../../utils/types/nullable.type';
import {Subject} from '../../../../domain/subject';
import {SubjectRepository} from '../../subject.repository';
import {SubjectMapper} from '../mappers/subject.mapper';
import {IPaginationOptions} from '../../../../../utils/types/pagination-options';

@Injectable()
export class SubjectRelationalRepository implements SubjectRepository {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly subjectRepository: Repository<SubjectEntity>
  ) {}

  async create(data: Subject): Promise<Subject> {
    const persistenceModel = SubjectMapper.toPersistence(data);
    const newEntity = await this.subjectRepository.save(this.subjectRepository.create(persistenceModel));
    return SubjectMapper.toDomain(newEntity);
  }

  async findAllWithPagination({paginationOptions}: {paginationOptions: IPaginationOptions}): Promise<Subject[]> {
    const entities = await this.subjectRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit
    });

    return entities.map((user) => SubjectMapper.toDomain(user));
  }

  async findById(id: Subject['id']): Promise<NullableType<Subject>> {
    const entity = await this.subjectRepository.findOne({
      where: {id}
    });

    return entity ? SubjectMapper.toDomain(entity) : null;
  }

  async update(id: Subject['id'], payload: Partial<Subject>): Promise<Subject> {
    const entity = await this.subjectRepository.findOne({
      where: {id}
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.subjectRepository.save(
      this.subjectRepository.create(
        SubjectMapper.toPersistence({
          ...SubjectMapper.toDomain(entity),
          ...payload
        })
      )
    );

    return SubjectMapper.toDomain(updatedEntity);
  }

  async remove(id: Subject['id']): Promise<void> {
    await this.subjectRepository.delete(id);
  }
}
