// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import {PartialType} from '@nestjs/swagger';
import {CreateSubjectDto} from './create-subject.dto';

export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {}
