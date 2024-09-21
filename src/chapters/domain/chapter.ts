import { ApiProperty } from '@nestjs/swagger';

export class Chapter {


  @ApiProperty({
    type: String,
  })
  id: string;
  
  @ApiProperty()
  name: string;

  @ApiProperty()
  subject: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
