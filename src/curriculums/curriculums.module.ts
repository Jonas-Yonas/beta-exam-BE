import {Module} from '@nestjs/common';
import {CurriculumsService} from './curriculums.service';
import {CurriculumsController} from './curriculums.controller';
import {RelationalCurriculumPersistenceModule} from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalCurriculumPersistenceModule],
  controllers: [CurriculumsController],
  providers: [CurriculumsService],
  exports: [CurriculumsService, RelationalCurriculumPersistenceModule]
})
export class CurriculumsModule {}
