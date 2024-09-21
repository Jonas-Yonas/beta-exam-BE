import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GradeEntity } from '../../../../grades/infrastructure/persistence/relational/entities/grade.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GradeSeedService {
  constructor(
    @InjectRepository(GradeEntity)
    private gradeRepository: Repository<GradeEntity>,
  ) {}

  async run() {
    const grades = [
      { name: 'grade_12' },
      { name: 'grade_11' },
      { name: 'grade_10' },
      { name: 'grade_9' },
    ];
    await this.gradeRepository.save(grades);
    
  }
}
