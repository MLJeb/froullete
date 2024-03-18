import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1710737350872 implements MigrationInterface {
    name = 'Migrations1710737350872'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roullete_to_prop" DROP COLUMN "order"`);
        await queryRunner.query(`ALTER TABLE "roullete_to_prop" DROP CONSTRAINT "UQ_b729404de90c038fffa21a87a39"`);
        await queryRunner.query(`ALTER TABLE "roullete_to_prop" DROP COLUMN "categorySlug"`);
        await queryRunner.query(`ALTER TABLE "roullete_to_prop" ADD "categorySlug" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "roullete_to_prop" ADD CONSTRAINT "UQ_b729404de90c038fffa21a87a39" UNIQUE ("propSlug", "categorySlug")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roullete_to_prop" DROP CONSTRAINT "UQ_b729404de90c038fffa21a87a39"`);
        await queryRunner.query(`ALTER TABLE "roullete_to_prop" DROP COLUMN "categorySlug"`);
        await queryRunner.query(`ALTER TABLE "roullete_to_prop" ADD "categorySlug" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "roullete_to_prop" ADD CONSTRAINT "UQ_b729404de90c038fffa21a87a39" UNIQUE ("propSlug", "categorySlug")`);
        await queryRunner.query(`ALTER TABLE "roullete_to_prop" ADD "order" integer NOT NULL`);
    }

}
