import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateModelPlanoInformationTable1629764173334 implements MigrationInterface {
    name = 'CreateModelPlanoInformationTable1629764173334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`modelId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD CONSTRAINT \`FK_3bf7267829bdd6a63adf5d90f31\` FOREIGN KEY (\`modelId\`) REFERENCES \`banca_admin\`.\`model\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP FOREIGN KEY \`FK_3bf7267829bdd6a63adf5d90f31\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`modelId\``);
    }

}
