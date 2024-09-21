import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Subject } from '../../domain/subject';

export abstract class SubjectRepository {
  abstract create(
    data: Omit<Subject, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Subject>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Subject[]>;

  abstract findById(id: Subject['id']): Promise<NullableType<Subject>>;

  abstract update(
    id: Subject['id'],
    payload: DeepPartial<Subject>,
  ): Promise<Subject | null>;

  abstract remove(id: Subject['id']): Promise<void>;
}
