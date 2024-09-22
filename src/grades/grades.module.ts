import {Module} from '@nestjs/common';
import {GradesService} from './grades.service';
import {GradesController} from './grades.controller';
import {RelationalGradePersistenceModule} from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalGradePersistenceModule],
  controllers: [GradesController],
  providers: [GradesService],
  exports: [GradesService, RelationalGradePersistenceModule]
})
export class GradesModule {}
