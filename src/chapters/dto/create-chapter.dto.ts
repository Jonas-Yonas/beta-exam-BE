import {
  // decorators here

  IsString
} from 'class-validator';

import {
  // decorators here
  ApiProperty
} from '@nestjs/swagger';

export class CreateChapterDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  subject: string;
  // Don't forget to use the class-validator decorators in the DTO properties.
}
