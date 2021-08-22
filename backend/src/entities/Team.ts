import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PlanoInformation } from "./PlanoInformation";
import { TeamInformation } from "./TeamInformation";

@Entity('team')
class Team {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(type => TeamInformation, team => Team)
  team_information: TeamInformation[];

  @OneToMany(type => PlanoInformation, team => Team)
  plano_information: PlanoInformation[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { Team };
