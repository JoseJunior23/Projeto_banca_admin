import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
export { Plano };
