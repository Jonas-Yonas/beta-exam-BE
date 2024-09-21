import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CurriculumEntity } from '../entities/curriculum.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Curriculum } from '../../../../domain/curriculum';
import { CurriculumRepository } from '../../curriculum.repository';
import { CurriculumMapper } from '../mappers/curriculum.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class CurriculumRelationalRepository implements CurriculumRepository {
  constructor(
    @InjectRepository(CurriculumEntity)
    private readonly curriculumRepository: Repository<CurriculumEntity>,
  ) {}

  async create(data: Curriculum): Promise<Curriculum> {
    const persistenceModel = CurriculumMapper.toPersistence(data);
    const newEntity = await this.curriculumRepository.save(
      this.curriculumRepository.create(persistenceModel),
    );
    return CurriculumMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Curriculum[]> {
    const entities = await this.curriculumRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => CurriculumMapper.toDomain(user));
  }

  async findById(id: Curriculum['id']): Promise<NullableType<Curriculum>> {
    const entity = await this.curriculumRepository.findOne({
      where: { id },
    });

    return entity ? CurriculumMapper.toDomain(entity) : null;
  }

  async update(
    id: Curriculum['id'],
    payload: Partial<Curriculum>,
  ): Promise<Curriculum> {
    const entity = await this.curriculumRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.curriculumRepository.save(
      this.curriculumRepository.create(
        CurriculumMapper.toPersistence({
          ...CurriculumMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return CurriculumMapper.toDomain(updatedEntity);
  }

  async remove(id: Curriculum['id']): Promise<void> {
    await this.curriculumRepository.delete(id);
  }
}
