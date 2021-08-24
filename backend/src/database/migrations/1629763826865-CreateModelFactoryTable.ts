import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateModelFactoryTable1629763826865 implements MigrationInterface {
    name = 'CreateModelFactoryTable1629763826865'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`model\` ADD \`factoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`model\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`model\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`model\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`model\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`model\` ADD CONSTRAINT \`FK_c45557267df0b468b528ca75bba\` FOREIGN KEY (\`factoryId\`) REFERENCES \`banca_admin\`.\`factory\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`model\` DROP FOREIGN KEY \`FK_c45557267df0b468b528ca75bba\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`model\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`model\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`model\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`model\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`model\` DROP COLUMN \`factoryId\``);
    }

}
