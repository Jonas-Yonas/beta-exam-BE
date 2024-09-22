import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ChapterEntity} from '../../../../chapters/infrastructure/persistence/relational/entities/chapter.entity';
import {Repository} from 'typeorm';
import {SubjectEntity} from '../../../../subjects/infrastructure/persistence/relational/entities/subject.entity';

@Injectable()
export class ChapterSeedService {
  constructor(
    @InjectRepository(ChapterEntity)
    private chapterRepository: Repository<ChapterEntity>
  ) {}

  async run() {
    const chapters = [
      {
        name: 'Introduction to Science',
        subject: {id: '232867eb-a0c2-4027-bb30-6148ad601bf0'} as SubjectEntity,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Advanced Mathematics',
        subject: {id: '73ee8314-55a1-4762-87f4-f013265be062'} as SubjectEntity,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'World History Overview',
        subject: {id: '72544153-d1ef-4461-ad8e-137c694237cc'} as SubjectEntity,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Physics Fundamentals',
        subject: {id: '632d002c-f93f-41b0-afed-0e8400a8ca5a'} as SubjectEntity,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await this.chapterRepository.save(chapters);
  }
}
