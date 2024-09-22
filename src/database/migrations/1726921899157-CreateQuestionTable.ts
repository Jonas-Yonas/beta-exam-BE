import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateQuestionTable1726921899157 implements MigrationInterface {
  name = 'CreateQuestionTable1726921899157';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "question" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "content" character varying NOT NULL, "reference" character varying, "explanation" character varying, "answer" character varying NOT NULL, "option_0" character varying NOT NULL, "option_1" character varying NOT NULL, "option_2" character varying NOT NULL, "option_3" character varying NOT NULL, "option_4" character varying NOT NULL, "added_by" character varying NOT NULL, "test_type" character varying NOT NULL, "source" character varying NOT NULL, "difficulty_level" character varying NOT NULL, "question_type" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "status" integer, "chapter_id" uuid, "subject_id" uuid, "grade_id" uuid, "curriculum_id" uuid, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "question" ADD CONSTRAINT "FK_971de984acb4f35388c89619482" FOREIGN KEY ("status") REFERENCES "status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "question" ADD CONSTRAINT "FK_749885cb1ae5482f4a25e978baa" FOREIGN KEY ("chapter_id") REFERENCES "chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "question" ADD CONSTRAINT "FK_624a92566d1b8efe4cde3853c3b" FOREIGN KEY ("subject_id") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "question" ADD CONSTRAINT "FK_0dd8a8fdac66faf307336fd699b" FOREIGN KEY ("grade_id") REFERENCES "grade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "question" ADD CONSTRAINT "FK_8aa6f8ef7e29e7c070bd2446f7f" FOREIGN KEY ("curriculum_id") REFERENCES "curriculum"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_8aa6f8ef7e29e7c070bd2446f7f"`);
    await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_0dd8a8fdac66faf307336fd699b"`);
    await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_624a92566d1b8efe4cde3853c3b"`);
    await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_749885cb1ae5482f4a25e978baa"`);
    await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_971de984acb4f35388c89619482"`);
    await queryRunner.query(`DROP TABLE "question"`);
  }
}
