import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1710743831377 implements MigrationInterface {
    name = 'Migrations1710743831377'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastCreditReward"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "lastCreditReward" bigint NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastCreditReward"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "lastCreditReward" integer NOT NULL DEFAULT '0'`);
    }

}
