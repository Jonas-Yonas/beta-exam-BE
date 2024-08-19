import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from '../config/config.type';
import { Exam } from './entities/exam.entity';

@Injectable()
export class ExamsService {
  constructor(private configService: ConfigService<AllConfigType>) {}

  appInfo() {
    return { name: this.configService.get('app.name', { infer: true }) };
  }
  findManyWithPagination({ }): Promise<Exam[]> {
    return Promise.resolve([]);

  }


}
