import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Factory } from "./Factory";
import { PlanoInformation } from "./PlanoInformation";

@Entity('plano')
class Plano {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  variation: string;

  @Column()
  description: string;

  @Column()
  entry_date: Date;

  @Column()
  plano_factory: number;

  @OneToMany(type => PlanoInformation, plano => Plano)
  plano_information: PlanoInformation[];

  @ManyToOne(type => Factory, plano => Plano, { eager: true })
  factory: Factory;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
export { Plano };
