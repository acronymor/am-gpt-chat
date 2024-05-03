import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Init implements MigrationInterface {
    name?: string | undefined;
    transaction?: boolean | undefined;

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 't_setting',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'note',
                        type: 'text',
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("t_setting")
    }
}