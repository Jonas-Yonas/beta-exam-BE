import { ApiProperty } from '@nestjs/swagger';

export class Grade {
@ApiProperty()
name: string;

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
