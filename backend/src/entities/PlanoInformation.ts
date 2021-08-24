import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Model } from "./Model";
import { Plano } from "./Plano";
import { Team } from "./Team";

@Entity('plano_information')
class PlanoInformation {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  entry_date: Date;

  @Column()
  departure_date: Date;

  @Column()
  ficha_producao: number;

  @Column('int')
  total_pairs: number;

  @Column('float')
  billed: number;

  @Column()
  billed_date: Date;

  @Column()
  payment_date: Date;

  @ManyToOne(type => Team, plano_information => PlanoInformation, { eager: true })
  team: Team;

  @ManyToOne(type => Plano, plano_information => PlanoInformation, { eager: true })
  plano: Plano;

  @ManyToOne(type => Model, plano_information => PlanoInformation, { eager: true })
  model: Model;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { PlanoInformation };
