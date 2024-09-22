import {Module} from '@nestjs/common';
import {ChaptersService} from './chapters.service';
import {ChaptersController} from './chapters.controller';
import {RelationalChapterPersistenceModule} from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalChapterPersistenceModule],
  controllers: [ChaptersController],
  providers: [ChaptersService],
  exports: [ChaptersService, RelationalChapterPersistenceModule]
})
export class ChaptersModule {}
