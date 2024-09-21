import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
Column,
ManyToOne,
JoinColumn,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { ApiProperty } from '@nestjs/swagger';
import { SubjectEntity } from '../../../../../subjects/infrastructure/persistence/relational/entities/subject.entity';

@Entity({
  name: 'chapter',
})
export class ChapterEntity extends EntityRelationalHelper {


  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ManyToOne(() => SubjectEntity, subject => subject.id)
  @JoinColumn({ name: 'subject', referencedColumnName: 'id' }) 
  subject: SubjectEntity;


  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
