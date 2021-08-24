import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateModelTable1629760581725 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'model',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'reference',
                        type: 'varchar'
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    },
                    {
                        name: 'par_value',
                        type: 'float'
                    },
                    {
                        name: 'pesponto_value',
                        type: 'float'
                    },
                    {
                        name: 'colacao_value',
                        type: 'float'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: 'now()'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('model')
    }

}
