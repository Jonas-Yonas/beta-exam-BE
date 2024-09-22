import {CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column} from 'typeorm';
import {EntityRelationalHelper} from '../../../../../utils/relational-entity-helper';
import {ApiProperty} from '@nestjs/swagger';

@Entity({
  name: 'curriculum'
})
export class CurriculumEntity extends EntityRelationalHelper {
  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
