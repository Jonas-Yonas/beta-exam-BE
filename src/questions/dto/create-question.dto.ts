import {IsString, IsUUID} from 'class-validator';

import {
  // decorators here
  ApiProperty
} from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty()
  status: number;
  @ApiProperty()
  @IsString()
  content: string;
  @ApiProperty()
  @IsString()
  reference: string;
  @ApiProperty()
  @IsString()
  explanation: string;
  @ApiProperty()
  @IsString()
  answer: string;
  @ApiProperty()
  @IsString()
  option_0: string;
  @ApiProperty()
  @IsString()
  option_1: string;
  @ApiProperty()
  @IsString()
  option_2: string;
  @ApiProperty()
  @IsString()
  option_3: string;
  @ApiProperty()
  @IsString()
  option_4: string;
  @IsString()
  added_by: string;
  @ApiProperty()
  @IsString()
  test_type: string;
  @ApiProperty()
  @IsString()
  source: string;
  @ApiProperty()
  @IsUUID()
  chapterId: string;
  @ApiProperty()
  @IsUUID()
  subjectId: string;
  @ApiProperty()
  @IsUUID()
  gradeId: string;
  @ApiProperty()
  @IsUUID()
  curriculumId: string;
  @ApiProperty()
  @IsString()
  difficulty_level: string;
  @ApiProperty()
  @IsString()
  question_type: string;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
