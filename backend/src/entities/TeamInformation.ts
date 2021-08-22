import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Employee } from "./Employee";
import { Team } from "./Team";

@Entity('team_information')
class TeamInformation {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(type => Employee, team_information => TeamInformation, { eager: true })
  employee: Employee;

  @ManyToOne(type => Team, team_information => TeamInformation, { eager: true })
  team: Team;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { TeamInformation };
