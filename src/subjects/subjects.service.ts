import {Injectable} from '@nestjs/common';
import {CreateSubjectDto} from './dto/create-subject.dto';
import {UpdateSubjectDto} from './dto/update-subject.dto';
import {SubjectRepository} from './infrastructure/persistence/subject.repository';
import {IPaginationOptions} from '../utils/types/pagination-options';
import {Subject} from './domain/subject';

@Injectable()
export class SubjectsService {
  constructor(private readonly subjectRepository: SubjectRepository) {}

  create(createSubjectDto: CreateSubjectDto) {
    return this.subjectRepository.create(createSubjectDto);
  }

  findAllWithPagination({paginationOptions}: {paginationOptions: IPaginationOptions}) {
    return this.subjectRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit
      }
    });
  }

  findOne(id: Subject['id']) {
    return this.subjectRepository.findById(id);
  }

  update(id: Subject['id'], updateSubjectDto: UpdateSubjectDto) {
    return this.subjectRepository.update(id, updateSubjectDto);
  }

  remove(id: Subject['id']) {
    return this.subjectRepository.remove(id);
  }
}
