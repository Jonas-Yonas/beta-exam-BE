import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {CurriculumEntity} from '../../../../curriculums/infrastructure/persistence/relational/entities/curriculum.entity';
import {Repository} from 'typeorm';

@Injectable()
export class CurriculumSeedService {
  constructor(
    @InjectRepository(CurriculumEntity)
    private curriculumRepository: Repository<CurriculumEntity>
  ) {}

  async run() {
    const curriculums = [{name: 'curriculum 1'}, {name: 'curriculum 2'}, {name: 'curriculum 3'}, {name: 'curriculum 4'}];
    await this.curriculumRepository.save(curriculums);
  }
}
