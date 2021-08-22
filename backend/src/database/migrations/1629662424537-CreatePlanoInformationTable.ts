import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlanoInformationTable1629662424537 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'plano_information',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'entry_date',
                        type: 'Date'
                    },
                    {
                        name: 'departure_date',
                        type: 'Date'
                    },
                    {
                        name: 'ficha_producao',
                        type: 'numeric'
                    },
                    {
                        name: 'total_pairs',
                        type: 'numeric'
                    },
                    {
                        name: 'billed',
                        type: 'numeric'
                    },
                    {
                        name: 'billed_date',
                        type: 'Date'
                    },
                    {
                        name: 'payment_date',
                        type: 'Date'
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
        await queryRunner.dropTable('plano_information')
    }
}
