import {Injectable} from '@nestjs/common';
import {CreateCurriculumDto} from './dto/create-curriculum.dto';
import {UpdateCurriculumDto} from './dto/update-curriculum.dto';
import {CurriculumRepository} from './infrastructure/persistence/curriculum.repository';
import {IPaginationOptions} from '../utils/types/pagination-options';
import {Curriculum} from './domain/curriculum';

@Injectable()
export class CurriculumsService {
  constructor(private readonly curriculumRepository: CurriculumRepository) {}

  create(createCurriculumDto: CreateCurriculumDto) {
    return this.curriculumRepository.create(createCurriculumDto);
  }

  findAllWithPagination({paginationOptions}: {paginationOptions: IPaginationOptions}) {
    return this.curriculumRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit
      }
    });
  }

  findOne(id: Curriculum['id']) {
    return this.curriculumRepository.findById(id);
  }

  update(id: Curriculum['id'], updateCurriculumDto: UpdateCurriculumDto) {
    return this.curriculumRepository.update(id, updateCurriculumDto);
  }

  remove(id: Curriculum['id']) {
    return this.curriculumRepository.remove(id);
  }
}
