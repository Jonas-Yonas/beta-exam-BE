import {  Query,
  HttpStatus,
  HttpCode, Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';

import { ExamsService } from './exams.service';
import { Exam } from './entities/exam.entity';
import { QueryUserDto } from './dto/query-user.dto';
import { infinityPagination } from '../utils/infinity-pagination';


@ApiTags('Exams')
@Controller()
export class ExamController {
  constructor(private examsService: ExamsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query() query: QueryUserDto,
  ): Promise<InfinityPaginationResponseDto<Exam>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.examsService.findManyWithPagination({
        filterOptions: query?.filters,
        sortOptions: query?.sort,
        paginationOptions: {
          page,
          limit,
        },
      }),
      { page, limit },
    );
  }
}
