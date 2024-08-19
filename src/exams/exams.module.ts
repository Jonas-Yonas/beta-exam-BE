import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ExamController } from './exams.controller';
import { ExamsService } from './exams.service';

@Module({
  imports: [ConfigModule],
  controllers: [ExamController],
  providers: [ExamsService],
})
export class ExamModule {}
