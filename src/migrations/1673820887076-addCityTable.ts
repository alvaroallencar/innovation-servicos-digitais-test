import { MigrationInterface, QueryRunner } from "typeorm";

export class addCityTable1673820887076 implements MigrationInterface {
    name = 'addCityTable1673820887076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cities" ("internalId" uuid NOT NULL DEFAULT uuid_generate_v4(), "id" integer NOT NULL, "name" character varying(120) NOT NULL, CONSTRAINT "PK_193466a51eac4503d3df13b5a49" PRIMARY KEY ("internalId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cities"`);
    }

}
