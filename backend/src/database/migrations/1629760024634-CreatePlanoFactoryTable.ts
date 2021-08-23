import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePlanoFactoryTable1629760024634 implements MigrationInterface {
    name = 'CreatePlanoFactoryTable1629760024634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` ADD \`factoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`factory\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`factory\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`factory\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`factory\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` ADD CONSTRAINT \`FK_ccabb309636837468030865ff04\` FOREIGN KEY (\`factoryId\`) REFERENCES \`banca_admin\`.\`factory\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` DROP FOREIGN KEY \`FK_ccabb309636837468030865ff04\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`factory\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`factory\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`factory\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`factory\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` DROP COLUMN \`factoryId\``);
    }

}
