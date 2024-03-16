import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1710581725968 implements MigrationInterface {
    name = 'Test1710581725968'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "props" ("slug" character varying NOT NULL, "readableName" character varying NOT NULL, "colour" character varying NOT NULL, CONSTRAINT "PK_908530107b29b533015e00827b6" PRIMARY KEY ("slug"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "props"`);
    }

}
