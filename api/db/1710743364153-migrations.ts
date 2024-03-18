import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1710743364153 implements MigrationInterface {
  name = 'Migrations1710743364153';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "roulletes" ADD "price" integer NOT NULL DEFAULT '1'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "lastCreditReward" integer NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "credits" SET DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "credits" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP COLUMN "lastCreditReward"`,
    );
    await queryRunner.query(`ALTER TABLE "roulletes" DROP COLUMN "price"`);
  }
}
