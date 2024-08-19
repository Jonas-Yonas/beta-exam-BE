import { Entity, Column, PrimaryGeneratedColumn,  OneToMany } from 'typeorm';
import { User } from '../../users/domain/user';
import { Question } from './question.entity';

@Entity()
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  // @ManyToMany(() => User, (user) => user.exams)
  students: User[];

  @OneToMany(() => Question, (question) => question.exam)
  questions: Question[];
}
