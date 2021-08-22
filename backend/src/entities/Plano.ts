import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
export { Plano };
