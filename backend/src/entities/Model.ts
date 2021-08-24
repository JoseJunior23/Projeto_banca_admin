import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Factory } from "./Factory";
import { PlanoInformation } from "./PlanoInformation";

@Entity('model')
class Model {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  reference: string;

  @Column()
  description: string;

  @Column('float')
  par_value: number;

  @Column('float')
  pesponto_value: number;

  @Column('float')
  colacao_value: number;

  @ManyToOne(type => Factory, model => Model, { eager: true })
  factory: Factory;

  @OneToMany(Type => PlanoInformation, model => Model)
  plano_information: PlanoInformation[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export { Model };
