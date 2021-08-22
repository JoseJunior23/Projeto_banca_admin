import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSessionTeamTable1629646785239 implements MigrationInterface {
    name = 'CreateSessionTeamTable1629646785239'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` ADD \`employeeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` ADD \`teamId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` ADD CONSTRAINT \`FK_6dbe8ac56081de700ff4e24a533\` FOREIGN KEY (\`employeeId\`) REFERENCES \`banca_admin\`.\`employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` ADD CONSTRAINT \`FK_749536fdb152d3bbd5aa5cc13a6\` FOREIGN KEY (\`teamId\`) REFERENCES \`banca_admin\`.\`team\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` DROP FOREIGN KEY \`FK_749536fdb152d3bbd5aa5cc13a6\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` DROP FOREIGN KEY \`FK_6dbe8ac56081de700ff4e24a533\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` DROP COLUMN \`teamId\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`team_information\` DROP COLUMN \`employeeId\``);
    }

}
