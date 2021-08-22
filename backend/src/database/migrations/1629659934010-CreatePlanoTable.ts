import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlanoTable1629659934010 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'plano',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'variation',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'entry_date',
                        type: 'Date'
                    },
                    {
                        name: 'plano_factory',
                        type: 'numeric'
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
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('plano')
    }

}
