import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurriculumEntity } from '../../../../curriculums/infrastructure/persistence/relational/entities/curriculum.entity';
import { CurriculumSeedService } from './curriculum-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([CurriculumEntity])],
  providers: [CurriculumSeedService],
  exports: [CurriculumSeedService],
})
export class CurriculumSeedModule {}
