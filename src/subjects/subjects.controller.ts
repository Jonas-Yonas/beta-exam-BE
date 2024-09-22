import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import {SubjectsService} from './subjects.service';
import {CreateSubjectDto} from './dto/create-subject.dto';
import {UpdateSubjectDto} from './dto/update-subject.dto';
import {ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags} from '@nestjs/swagger';
import {Subject} from './domain/subject';
import {AuthGuard} from '@nestjs/passport';
import {InfinityPaginationResponse, InfinityPaginationResponseDto} from '../utils/dto/infinity-pagination-response.dto';
import {infinityPagination} from '../utils/infinity-pagination';
import {FindAllSubjectsDto} from './dto/find-all-subjects.dto';

@ApiTags('Subjects')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'subjects',
  version: '1'
})
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
  @ApiCreatedResponse({
    type: Subject
  })
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectsService.create(createSubjectDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(Subject)
  })
  async findAll(@Query() query: FindAllSubjectsDto): Promise<InfinityPaginationResponseDto<Subject>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.subjectsService.findAllWithPagination({
        paginationOptions: {
          page,
          limit
        }
      }),
      {page, limit}
    );
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true
  })
  @ApiOkResponse({
    type: Subject
  })
  findOne(@Param('id') id: string) {
    return this.subjectsService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true
  })
  @ApiOkResponse({
    type: Subject
  })
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectsService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true
  })
  remove(@Param('id') id: string) {
    return this.subjectsService.remove(id);
  }
}
