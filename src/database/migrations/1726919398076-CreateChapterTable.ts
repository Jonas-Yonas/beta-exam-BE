import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateChapterTable1726919398076 implements MigrationInterface {
    name = 'CreateChapterTable1726919398076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chapter" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "subject" uuid, CONSTRAINT "PK_275bd1c62bed7dff839680614ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "chapter" ADD CONSTRAINT "FK_70c862796e24d3fd41e3dc126e2" FOREIGN KEY ("subject") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chapter" DROP CONSTRAINT "FK_70c862796e24d3fd41e3dc126e2"`);
        await queryRunner.query(`DROP TABLE "chapter"`);
    }

}
