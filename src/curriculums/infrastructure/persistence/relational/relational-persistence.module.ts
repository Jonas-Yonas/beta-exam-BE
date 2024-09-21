import { Module } from '@nestjs/common';
import { CurriculumRepository } from '../curriculum.repository';
import { CurriculumRelationalRepository } from './repositories/curriculum.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurriculumEntity } from './entities/curriculum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CurriculumEntity])],
  providers: [
    {
      provide: CurriculumRepository,
      useClass: CurriculumRelationalRepository,
    },
  ],
  exports: [CurriculumRepository],
})
export class RelationalCurriculumPersistenceModule {}
