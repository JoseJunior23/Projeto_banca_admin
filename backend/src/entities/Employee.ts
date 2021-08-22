import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Session } from "./Session";
import { TeamInformation } from "./TeamInformation";

@Entity('employee')
class Employee {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  phone: string;

  @ManyToOne(type => Session, employee => Employee, { eager: true })
  session: Session;

  @OneToMany(type => TeamInformation, employee => Employee)
  team_infromation: TeamInformation[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { Employee };
