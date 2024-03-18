import { Prop } from 'src/props/entities/prop.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
} from 'typeorm';
import { Roullete } from './roullete.entity';
import { MAX, Max, Min } from 'class-validator';

@Unique(['propSlug', 'roulleteSlug'])
@Entity()
export class RoulleteToProp {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public propSlug: string;

  @Column()
  public roulleteSlug: string;

  @Column({ default: 10 })
  @Min(0)
  public weigth: number;

  @ManyToOne(() => Prop, (prop) => prop.roulleteToProps)
  public prop: Prop;

  @ManyToOne(() => Roullete, (roullete) => roullete.roulleteToProps)
  public roullete: Roullete;
}
