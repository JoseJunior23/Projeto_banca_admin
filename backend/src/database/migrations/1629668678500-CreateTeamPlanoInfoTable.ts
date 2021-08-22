import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTeamPlanoInfoTable1629668678500 implements MigrationInterface {
    name = 'CreateTeamPlanoInfoTable1629668678500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`teamId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`entry_date\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`entry_date\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`departure_date\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`departure_date\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`ficha_producao\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`ficha_producao\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`total_pairs\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`total_pairs\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`billed\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`billed\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`billed_date\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`billed_date\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`payment_date\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`payment_date\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` CHANGE \`variation\` \`variation\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` CHANGE \`description\` \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` DROP COLUMN \`entry_date\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` ADD \`entry_date\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` DROP COLUMN \`plano_factory\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` ADD \`plano_factory\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD CONSTRAINT \`FK_3ede7f77a73241c385517c5d983\` FOREIGN KEY (\`teamId\`) REFERENCES \`banca_admin\`.\`team\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP FOREIGN KEY \`FK_3ede7f77a73241c385517c5d983\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` DROP COLUMN \`plano_factory\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` ADD \`plano_factory\` decimal NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` DROP COLUMN \`entry_date\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` ADD \`entry_date\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano\` CHANGE \`variation\` \`variation\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`payment_date\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`payment_date\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`billed_date\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`billed_date\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`billed\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`billed\` decimal NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`total_pairs\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`total_pairs\` decimal NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`ficha_producao\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`ficha_producao\` decimal NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`departure_date\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`departure_date\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`entry_date\``);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` ADD \`entry_date\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`banca_admin\`.\`plano_information\` DROP COLUMN \`teamId\``);
    }

}
