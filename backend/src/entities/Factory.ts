import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Plano } from "./Plano";

@Entity('factory')
class Factory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  corporate_name: string;

  @Column()
  fantasy_name: string;

  @OneToMany(type => Plano, factory => Factory)
  plano: Plano[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { Factory };
