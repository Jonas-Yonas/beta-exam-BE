import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionEntity } from '../../../../questions/infrastructure/persistence/relational/entities/question.entity';
import { QuestionSeedService } from './question-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionEntity])],
  providers: [QuestionSeedService],
  exports: [QuestionSeedService],
})
export class QuestionSeedModule {}
