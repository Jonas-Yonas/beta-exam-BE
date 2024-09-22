import {DeepPartial} from '../../../utils/types/deep-partial.type';
import {NullableType} from '../../../utils/types/nullable.type';
import {IPaginationOptions} from '../../../utils/types/pagination-options';
import {Grade} from '../../domain/grade';

export abstract class GradeRepository {
  abstract create(data: Omit<Grade, 'id' | 'createdAt' | 'updatedAt'>): Promise<Grade>;

  abstract findAllWithPagination({paginationOptions}: {paginationOptions: IPaginationOptions}): Promise<Grade[]>;

  abstract findById(id: Grade['id']): Promise<NullableType<Grade>>;

  abstract update(id: Grade['id'], payload: DeepPartial<Grade>): Promise<Grade | null>;

  abstract remove(id: Grade['id']): Promise<void>;
}
