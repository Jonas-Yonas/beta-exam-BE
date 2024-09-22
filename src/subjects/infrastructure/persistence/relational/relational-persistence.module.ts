import {Module} from '@nestjs/common';
import {SubjectRepository} from '../subject.repository';
import {SubjectRelationalRepository} from './repositories/subject.repository';
import {TypeOrmModule} from '@nestjs/typeorm';
import {SubjectEntity} from './entities/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectEntity])],
  providers: [
    {
      provide: SubjectRepository,
      useClass: SubjectRelationalRepository
    }
  ],
  exports: [SubjectRepository]
})
export class RelationalSubjectPersistenceModule {}
