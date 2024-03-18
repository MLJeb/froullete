import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1710736146851 implements MigrationInterface {
  name = 'Migrations1710736146851';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" ADD CONSTRAINT "UQ_b729404de90c038fffa21a87a39" UNIQUE ("propSlug", "categorySlug")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" DROP CONSTRAINT "UQ_b729404de90c038fffa21a87a39"`,
    );
  }
}
