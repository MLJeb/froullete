import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1710733827000 implements MigrationInterface {
  name = 'Migrations1710733827000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "roulletes" ("slug" character varying NOT NULL, "readableName" character varying NOT NULL, CONSTRAINT "PK_ae92628b665222411095caf8f16" PRIMARY KEY ("slug"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "roullete_to_prop" ("propToRoulleteId" SERIAL NOT NULL, "propSlug" character varying NOT NULL, "categorySlug" integer NOT NULL, "order" integer NOT NULL, "roulleteSlug" character varying, CONSTRAINT "PK_60ac05eb3a569e210203615a6a8" PRIMARY KEY ("propToRoulleteId"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "roullete_to_prop" ADD CONSTRAINT "FK_aeb96c739e0dc05684b884d12a3" FOREIGN KEY ("propSlug") REFERENCES "props"("slug") ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
      `ALTER TABLE "roullete_to_prop" DROP CONSTRAINT "FK_aeb96c739e0dc05684b884d12a3"`,
    );
    await queryRunner.query(`DROP TABLE "roullete_to_prop"`);
    await queryRunner.query(`DROP TABLE "roulletes"`);
  }
}
