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
import { CurriculumEntity } from '../../../../../curriculums/infrastructure/persistence/relational/entities/curriculum.entity';
import { GradeEntity } from '../../../../../grades/infrastructure/persistence/relational/entities/grade.entity';
import { SubjectEntity } from '../../../../../subjects/infrastructure/persistence/relational/entities/subject.entity';
import { ChapterEntity } from '../../../../../chapters/infrastructure/persistence/relational/entities/chapter.entity';
import { StatusEntity } from '../../../../../statuses/infrastructure/persistence/relational/entities/status.entity';

@Entity({
  name: 'question',
})
export class QuestionEntity extends EntityRelationalHelper {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => StatusEntity, status => status.id)
  @JoinColumn({ name: 'status', referencedColumnName: 'id' })
  status: StatusEntity;
  @Column()
  content: string;

  @Column({ nullable: true })
  reference: string;

  @Column({ nullable: true })
  explanation: string;

  @Column()
  answer: string;

  @Column()
  option_0: string;

  @Column()
  option_1: string;

  @Column()
  option_2: string;

  @Column()
  option_3: string;

  @Column()
  option_4: string;

  @Column()
  added_by: string;

  @Column()
  test_type: string;

  @Column()
  source: string;

  @ManyToOne(() => ChapterEntity, chapter => chapter.id)
  @JoinColumn({ name: 'chapter_id', referencedColumnName: 'id' })
  chapter: ChapterEntity;

  @ManyToOne(() => SubjectEntity, subject => subject.id)
  @JoinColumn({ name: 'subject_id', referencedColumnName: 'id' })
  subject: SubjectEntity;

  @ManyToOne(() => GradeEntity, grade => grade.id)
  @JoinColumn({ name: 'grade_id', referencedColumnName: 'id' })
  grade: GradeEntity;

  @ManyToOne(() => CurriculumEntity, curriculum => curriculum.id)
  @JoinColumn({ name: 'curriculum_id', referencedColumnName: 'id' })
  curriculum: CurriculumEntity;

  @Column()
  difficulty_level: string;

  @Column()
  question_type: string;


  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
