import { NestFactory } from '@nestjs/core';
import { GradeSeedService } from './grade/grade-seed.service';
import { PermissionSeedService } from './permission/permission-seed.service';
import { RoleSeedService } from './role/role-seed.service';
import { SeedModule } from './seed.module';
import { StatusSeedService } from './status/status-seed.service';
import { UserSeedService } from './user/user-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  // run
  await app.get(RoleSeedService).run();
  await app.get(StatusSeedService).run();
  await app.get(UserSeedService).run();

  await app.get(PermissionSeedService).run();

  await app.get(GradeSeedService).run();

  await app.close();
};

void runSeed();
