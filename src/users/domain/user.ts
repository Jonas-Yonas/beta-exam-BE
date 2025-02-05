import {Exclude, Expose} from 'class-transformer';
import {FileType} from '../../files/domain/file';
import {Role} from '../../roles/domain/role';
import {Status} from '../../statuses/domain/status';
import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

const idType = Number;

export class User {
  @ApiPropertyOptional()
  phoneNumber?: string;

  @ApiProperty({
    type: idType
  })
  id: number | string;

  @ApiProperty({
    type: String,
    example: 'john.doe@example.com'
  })
  @Expose({groups: ['me', 'admin']})
  email: string | null;

  @Exclude({toPlainOnly: true})
  password?: string;

  @Exclude({toPlainOnly: true})
  previousPassword?: string;

  @ApiProperty({
    type: String,
    example: 'email'
  })
  @Expose({groups: ['me', 'admin']})
  provider: string;

  @ApiProperty({
    type: String,
    example: '1234567890'
  })
  @Expose({groups: ['me', 'admin']})
  socialId?: string | null;

  @ApiProperty({
    type: String,
    example: 'John'
  })
  firstName: string | null;

  @ApiProperty({
    type: String,
    example: 'Doe'
  })
  lastName: string | null;

  @ApiProperty({
    type: () => FileType
  })
  photo?: FileType | null;

  @ApiProperty({
    type: () => Role
  })
  role?: Role | null;

  @ApiProperty({
    type: () => Status
  })
  status?: Status;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;
}
