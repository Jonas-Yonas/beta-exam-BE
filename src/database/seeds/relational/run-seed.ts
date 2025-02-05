import {NestFactory} from '@nestjs/core';
import {QuestionSeedService} from './question/question-seed.service';
import {CurriculumSeedService} from './curriculum/curriculum-seed.service';
import {ChapterSeedService} from './chapter/chapter-seed.service';
import {SubjectSeedService} from './subject/subject-seed.service';
import {GradeSeedService} from './grade/grade-seed.service';
import {PermissionSeedService} from './permission/permission-seed.service';
import {RoleSeedService} from './role/role-seed.service';
import {SeedModule} from './seed.module';
import {StatusSeedService} from './status/status-seed.service';
import {UserSeedService} from './user/user-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  // run
  await app.get(RoleSeedService).run();
  await app.get(StatusSeedService).run();
  await app.get(UserSeedService).run();

  await app.get(PermissionSeedService).run();

  await app.get(GradeSeedService).run();

  await app.get(SubjectSeedService).run();

  await app.get(ChapterSeedService).run();

  await app.get(CurriculumSeedService).run();

  await app.get(QuestionSeedService).run();

  await app.close();
};

void runSeed();
