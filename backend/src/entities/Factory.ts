import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Model } from "./Model";
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

  @OneToMany(type => Model, factory => Factory)
  model: Model[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { Factory };
