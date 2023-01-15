import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1673766221119 implements MigrationInterface {
    name = 'createTables1673766221119'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "status" SET DEFAULT 'ACTIVE'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "status" DROP DEFAULT`);
    }

}
