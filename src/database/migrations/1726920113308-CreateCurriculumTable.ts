import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateCurriculumTable1726920113308 implements MigrationInterface {
  name = 'CreateCurriculumTable1726920113308';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "curriculum" ("name" character varying NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ea7cdfd52edbddc8d7352e2a747" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "curriculum"`);
  }
}
