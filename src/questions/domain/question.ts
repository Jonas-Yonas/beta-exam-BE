import { ApiProperty } from '@nestjs/swagger';

export class Question {
  @ApiProperty({ description: 'The unique identifier of the question.' })
  id: string;

  @ApiProperty({ description: 'The status of the question, e.g., active, inactive.' })
  status: string;

  @ApiProperty({ description: 'The content or body of the question.' })
  content: string;

  @ApiProperty({ description: 'Reference for the question, such as a book or article.' })
  reference: string;

  @ApiProperty({ description: 'Explanation or reasoning behind the correct answer.' })
  explanation: string;

  @ApiProperty({ description: 'The correct answer to the question.' })
  answer: string;

  @ApiProperty({ description: 'First answer option for the question.' })
  option_0: string;

  @ApiProperty({ description: 'Second answer option for the question.' })
  option_1: string;

  @ApiProperty({ description: 'Third answer option for the question.' })
  option_2: string;

  @ApiProperty({ description: 'Fourth answer option for the question.' })
  option_3: string;

  @ApiProperty({ description: 'Fifth answer option for the question.' })
  option_4: string;

  @ApiProperty({ description: 'The user who added the question.' })
  added_by: string;

  @ApiProperty({ description: 'The type of test this question belongs to.' })
  test_type: string;

  @ApiProperty({ description: 'The source of the question, such as an exam or test.' })
  source: string;

  @ApiProperty({ description: 'Foreign key referring to the chapter this question belongs to.' })
  chapterId: string;

  @ApiProperty({ description: 'Foreign key referring to the subject this question belongs to.' })
  subjectId: string;

  @ApiProperty({ description: 'Foreign key referring to the grade this question is meant for.' })
  gradeId: string;

  @ApiProperty({ description: 'Foreign key referring to the curriculum this question follows.' })
  curriculumId: string;

  @ApiProperty({ description: 'The difficulty level of the question.' })
  difficulty_level: string;

  @ApiProperty({ description: 'The type of the question, such as MCQ or True/False.' })
  question_type: string;

  @ApiProperty({ description: 'Timestamp when the question was created.' })
  createdAt: Date;

  @ApiProperty({ description: 'Timestamp when the question was last updated.' })
  updatedAt: Date;
}
