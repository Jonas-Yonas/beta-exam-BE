import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GradeEntity } from '../entities/grade.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Grade } from '../../../../domain/grade';
import { GradeRepository } from '../../grade.repository';
import { GradeMapper } from '../mappers/grade.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class GradeRelationalRepository implements GradeRepository {
  constructor(
    @InjectRepository(GradeEntity)
    private readonly gradeRepository: Repository<GradeEntity>,
  ) {}

  async create(data: Grade): Promise<Grade> {
    const persistenceModel = GradeMapper.toPersistence(data);
    const newEntity = await this.gradeRepository.save(
      this.gradeRepository.create(persistenceModel),
    );
    return GradeMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Grade[]> {
    const entities = await this.gradeRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => GradeMapper.toDomain(user));
  }

  async findById(id: Grade['id']): Promise<NullableType<Grade>> {
    const entity = await this.gradeRepository.findOne({
      where: { id },
    });

    return entity ? GradeMapper.toDomain(entity) : null;
  }

  async update(
    id: Grade['id'],
    payload: Partial<Grade>,
  ): Promise<Grade> {
    const entity = await this.gradeRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.gradeRepository.save(
      this.gradeRepository.create(
        GradeMapper.toPersistence({
          ...GradeMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return GradeMapper.toDomain(updatedEntity);
  }

  async remove(id: Grade['id']): Promise<void> {
    await this.gradeRepository.delete(id);
  }
}
