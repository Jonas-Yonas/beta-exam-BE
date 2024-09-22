import {DeepPartial} from '../../../utils/types/deep-partial.type';
import {NullableType} from '../../../utils/types/nullable.type';
import {IPaginationOptions} from '../../../utils/types/pagination-options';
import {Curriculum} from '../../domain/curriculum';

export abstract class CurriculumRepository {
  abstract create(data: Omit<Curriculum, 'id' | 'createdAt' | 'updatedAt'>): Promise<Curriculum>;

  abstract findAllWithPagination({paginationOptions}: {paginationOptions: IPaginationOptions}): Promise<Curriculum[]>;

  abstract findById(id: Curriculum['id']): Promise<NullableType<Curriculum>>;

  abstract update(id: Curriculum['id'], payload: DeepPartial<Curriculum>): Promise<Curriculum | null>;

  abstract remove(id: Curriculum['id']): Promise<void>;
}
