import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Session } from "./Session";

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { Employee };
