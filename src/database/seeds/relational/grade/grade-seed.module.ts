import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GradeEntity } from '../../../../grades/infrastructure/persistence/relational/entities/grade.entity';
import { GradeSeedService } from './grade-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([GradeEntity])],
  providers: [GradeSeedService],
  exports: [GradeSeedService],
})
export class GradeSeedModule {}
