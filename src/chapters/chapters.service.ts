import {Injectable} from '@nestjs/common';
import {CreateChapterDto} from './dto/create-chapter.dto';
import {UpdateChapterDto} from './dto/update-chapter.dto';
import {ChapterRepository} from './infrastructure/persistence/chapter.repository';
import {IPaginationOptions} from '../utils/types/pagination-options';
import {Chapter} from './domain/chapter';

@Injectable()
export class ChaptersService {
  constructor(private readonly chapterRepository: ChapterRepository) {}

  create(createChapterDto: CreateChapterDto) {
    return this.chapterRepository.create(createChapterDto);
  }

  findAllWithPagination({paginationOptions}: {paginationOptions: IPaginationOptions}) {
    return this.chapterRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit
      }
    });
  }

  findOne(id: Chapter['id']) {
    return this.chapterRepository.findById(id);
  }

  update(id: Chapter['id'], updateChapterDto: UpdateChapterDto) {
    return this.chapterRepository.update(id, updateChapterDto);
  }

  remove(id: Chapter['id']) {
    return this.chapterRepository.remove(id);
  }
}
