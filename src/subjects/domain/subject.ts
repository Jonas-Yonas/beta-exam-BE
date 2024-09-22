import {ApiProperty} from '@nestjs/swagger';

export class Subject {
  @ApiProperty()
  name: string;

  @ApiProperty({
    type: String
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
