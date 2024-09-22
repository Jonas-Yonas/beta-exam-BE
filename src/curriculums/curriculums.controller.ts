import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import {CurriculumsService} from './curriculums.service';
import {CreateCurriculumDto} from './dto/create-curriculum.dto';
import {UpdateCurriculumDto} from './dto/update-curriculum.dto';
import {ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags} from '@nestjs/swagger';
import {Curriculum} from './domain/curriculum';
import {AuthGuard} from '@nestjs/passport';
import {InfinityPaginationResponse, InfinityPaginationResponseDto} from '../utils/dto/infinity-pagination-response.dto';
import {infinityPagination} from '../utils/infinity-pagination';
import {FindAllCurriculumsDto} from './dto/find-all-curriculums.dto';

@ApiTags('Curriculums')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'curriculums',
  version: '1'
})
export class CurriculumsController {
  constructor(private readonly curriculumsService: CurriculumsService) {}

  @Post()
  @ApiCreatedResponse({
    type: Curriculum
  })
  create(@Body() createCurriculumDto: CreateCurriculumDto) {
    return this.curriculumsService.create(createCurriculumDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(Curriculum)
  })
  async findAll(@Query() query: FindAllCurriculumsDto): Promise<InfinityPaginationResponseDto<Curriculum>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.curriculumsService.findAllWithPagination({
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
    type: Curriculum
  })
  findOne(@Param('id') id: string) {
    return this.curriculumsService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true
  })
  @ApiOkResponse({
    type: Curriculum
  })
  update(@Param('id') id: string, @Body() updateCurriculumDto: UpdateCurriculumDto) {
    return this.curriculumsService.update(id, updateCurriculumDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true
  })
  remove(@Param('id') id: string) {
    return this.curriculumsService.remove(id);
  }
}
