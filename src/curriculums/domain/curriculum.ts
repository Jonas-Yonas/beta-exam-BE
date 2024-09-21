import { ApiProperty } from '@nestjs/swagger';

export class Curriculum {
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
