import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSessionEmployeeTable1629591129130 implements MigrationInterface {
    name = 'CreateSessionEmployeeTable1629591129130'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`UQ_df5aa466ce003d7ef89817ef584\` ON \`banca_admin\`.\`employee\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`employee\` ADD \`sessionId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`session\` CHANGE \`description\` \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`session\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`session\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`session\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`session\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`employee\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`employee\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`employee\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`employee\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`employee\` ADD CONSTRAINT \`FK_ab1277707f85c6bba1748032fc5\` FOREIGN KEY (\`sessionId\`) REFERENCES \`banca_admin\`.\`session\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`employee\` DROP FOREIGN KEY \`FK_ab1277707f85c6bba1748032fc5\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`employee\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`employee\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`employee\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`employee\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`session\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`session\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`session\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`session\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`session\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`employee\` DROP COLUMN \`sessionId\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`UQ_df5aa466ce003d7ef89817ef584\` ON \`banca_admin\`.\`employee\` (\`nickname\`)`);
    }

}
