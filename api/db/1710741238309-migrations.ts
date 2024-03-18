import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1710741238309 implements MigrationInterface {
  name = 'Migrations1710741238309';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" RENAME COLUMN "propToRoulleteId" TO "id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" RENAME CONSTRAINT "PK_60ac05eb3a569e210203615a6a8" TO "PK_571a9ea699ffb0e825f599db174"`,
    );
    await queryRunner.query(
      `ALTER SEQUENCE "roullete_to_prop_propToRoulleteId_seq" RENAME TO "roullete_to_prop_id_seq"`,
    );
    await queryRunner.query(
      `CREATE TABLE "prop_basket" ("id" SERIAL NOT NULL, "propSlug" character varying NOT NULL, "userId" integer NOT NULL, CONSTRAINT "UQ_aa262ecdce105aef8dbfb48aa1d" UNIQUE ("propSlug", "userId"), CONSTRAINT "PK_98794d7abad971595b892554632" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "credits" integer NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "prop_basket" ADD CONSTRAINT "FK_63954c99673babed7a290d41ee4" FOREIGN KEY ("propSlug") REFERENCES "props"("slug") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "prop_basket" ADD CONSTRAINT "FK_b810b61b4b98a1596b5274d245b" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "prop_basket" DROP CONSTRAINT "FK_b810b61b4b98a1596b5274d245b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "prop_basket" DROP CONSTRAINT "FK_63954c99673babed7a290d41ee4"`,
    );
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "prop_basket"`);
    await queryRunner.query(
      `ALTER SEQUENCE "roullete_to_prop_id_seq" RENAME TO "roullete_to_prop_propToRoulleteId_seq"`,
    );
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" RENAME CONSTRAINT "PK_571a9ea699ffb0e825f599db174" TO "PK_60ac05eb3a569e210203615a6a8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" RENAME COLUMN "id" TO "propToRoulleteId"`,
    );
  }
}
