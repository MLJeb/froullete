import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1710738087452 implements MigrationInterface {
  name = 'Migrations1710738087452';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" DROP CONSTRAINT "UQ_b729404de90c038fffa21a87a39"`,
    );
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" DROP COLUMN "categorySlug"`,
    );
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" DROP CONSTRAINT "FK_4916fac3bc97bb8be985a0d2181"`,
    );
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" ALTER COLUMN "roulleteSlug" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" ADD CONSTRAINT "UQ_f4ea8d54acb436e02a807d37c70" UNIQUE ("propSlug", "roulleteSlug")`,
    );
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" ADD CONSTRAINT "FK_4916fac3bc97bb8be985a0d2181" FOREIGN KEY ("roulleteSlug") REFERENCES "roulletes"("slug") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" DROP CONSTRAINT "FK_4916fac3bc97bb8be985a0d2181"`,
    );
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" DROP CONSTRAINT "UQ_f4ea8d54acb436e02a807d37c70"`,
    );
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" ALTER COLUMN "roulleteSlug" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" ADD CONSTRAINT "FK_4916fac3bc97bb8be985a0d2181" FOREIGN KEY ("roulleteSlug") REFERENCES "roulletes"("slug") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" ADD "categorySlug" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" ADD CONSTRAINT "UQ_b729404de90c038fffa21a87a39" UNIQUE ("propSlug", "categorySlug")`,
    );
  }
}
