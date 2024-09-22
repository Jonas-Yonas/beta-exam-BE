import {Module} from '@nestjs/common';
import {SubjectsService} from './subjects.service';
import {SubjectsController} from './subjects.controller';
import {RelationalSubjectPersistenceModule} from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalSubjectPersistenceModule],
  controllers: [SubjectsController],
  providers: [SubjectsService],
  exports: [SubjectsService, RelationalSubjectPersistenceModule]
})
export class SubjectsModule {}
