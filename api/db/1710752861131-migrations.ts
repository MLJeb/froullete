import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1710752861131 implements MigrationInterface {
  name = 'Migrations1710752861131';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" ADD "weigth" integer NOT NULL DEFAULT '10'`,
    );
    await queryRunner.query(
      `ALTER TABLE "prop_basket" ADD "quantity" integer NOT NULL DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "prop_basket" DROP COLUMN "quantity"`);
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" DROP COLUMN "weigth"`,
    );
  }
}
