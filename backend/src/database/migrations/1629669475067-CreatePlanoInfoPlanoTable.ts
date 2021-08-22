import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePlanoInfoPlanoTable1629669475067 implements MigrationInterface {
    name = 'CreatePlanoInfoPlanoTable1629669475067'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`planoId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD CONSTRAINT \`FK_bc9d984d66d03e4a53916b1ec27\` FOREIGN KEY (\`planoId\`) REFERENCES \`banca_admin\`.\`plano\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP FOREIGN KEY \`FK_bc9d984d66d03e4a53916b1ec27\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`planoId\``);
    }

}
