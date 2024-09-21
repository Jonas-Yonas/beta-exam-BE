import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectEntity } from '../../../../subjects/infrastructure/persistence/relational/entities/subject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectSeedService {
  constructor(
    @InjectRepository(SubjectEntity)
    private subjectRepository: Repository<SubjectEntity>,
  ) {}

  async run() {
    const subjects = [
      { name: 'biology' },
      { name: 'chemistry' },
      { name: 'physics' },
      { name: 'english' },
    ];
    await this.subjectRepository.save(subjects);
  }
}
