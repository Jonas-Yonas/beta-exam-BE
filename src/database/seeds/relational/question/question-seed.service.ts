import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionEntity } from '../../../../questions/infrastructure/persistence/relational/entities/question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionSeedService {
  constructor(
    @InjectRepository(QuestionEntity)
    private questionRepository: Repository<QuestionEntity>,
  ) {}

  async run() {
    const questions = [
      {
        status: { id: 1 },
        content: 'What is the capital of France?',
        reference: 'Geography Book',
        explanation: 'Paris is the capital of France.',
        answer: 'Paris',
        option_0: 'Paris',
        option_1: 'London',
        option_2: 'Berlin',
        option_3: 'Rome',
        option_4: 'Madrid',
        added_by: 'admin',
        test_type: 'multiple_choice',
        source: 'Classroom Exam',
        chapter: { id: '8efd0d06-41bf-40be-b6aa-0b34624aa820' }, // Replace with valid chapter UUID
        subject: { id: '232867eb-a0c2-4027-bb30-6148ad601bf0' }, // Replace with valid subject UUID
        grade: { id: '0b79dc1b-95dd-469b-b455-6ab2c5a94414' },     // Replace with valid grade UUID
        curriculum: { id: 'bbeac364-ac30-4bbc-b985-914bd0b61a37' }, // Replace with valid curriculum UUID
       
        difficulty_level: 'easy',
        question_type: 'MCQ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: { id: 1 },
        content: 'Solve the equation: 2x + 3 = 7',
        reference: 'Algebra Book',
        explanation: 'Subtract 3 and divide by 2 to get the solution.',
        answer: '2',
        option_0: '1',
        option_1: '2',
        option_2: '3',
        option_3: '4',
        option_4: '5',
        added_by: 'teacher',
        test_type: 'multiple_choice',
        source: 'Algebra Exam',
        chapter: { id: '8efd0d06-41bf-40be-b6aa-0b34624aa820' }, // Replace with valid chapter UUID
        subject: { id: '232867eb-a0c2-4027-bb30-6148ad601bf0' }, // Replace with valid subject UUID
        grade: { id: '0b79dc1b-95dd-469b-b455-6ab2c5a94414' },     // Replace with valid grade UUID
        curriculum: { id: 'bbeac364-ac30-4bbc-b985-914bd0b61a37' }, // Replace with valid curriculum UUID
        difficulty_level: 'medium',
        question_type: 'MCQ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await this.questionRepository.save(questions);
  }
}
