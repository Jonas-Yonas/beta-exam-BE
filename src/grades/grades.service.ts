import { Injectable } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { GradeRepository } from './infrastructure/persistence/grade.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Grade } from './domain/grade';

@Injectable()
export class GradesService {
  constructor(private readonly gradeRepository: GradeRepository) {}

  create(createGradeDto: CreateGradeDto) {
    return this.gradeRepository.create(createGradeDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.gradeRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Grade['id']) {
    return this.gradeRepository.findById(id);
  }

  update(id: Grade['id'], updateGradeDto: UpdateGradeDto) {
    return this.gradeRepository.update(id, updateGradeDto);
  }

  remove(id: Grade['id']) {
    return this.gradeRepository.remove(id);
  }
}
