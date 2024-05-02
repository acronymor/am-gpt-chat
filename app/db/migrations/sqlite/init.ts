import {MigrationInterface, QueryRunner} from "typeorm";

export class Init implements MigrationInterface {
    name?: string | undefined;
    transaction?: boolean | undefined;

    public async up(queryRunner: QueryRunner): Promise<any> {
        console.log("sqlite-init", "create table")
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        console.log("sqlite-init", "drop table")
    }

}