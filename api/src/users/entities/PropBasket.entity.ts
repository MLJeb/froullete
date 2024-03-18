import { Prop } from 'src/props/entities/prop.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
} from 'typeorm';
import { User } from './user.entity';
import { IsInt, Min } from 'class-validator';

@Unique(['propSlug', 'userId'])
@Entity()
export class PropBasket {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public propSlug: string;

  @Column({ default: 0 })
  @Min(0)
  @IsInt()
  public quantity: number;

  @Column()
  public userId: number;

  @ManyToOne(() => Prop, (prop) => prop.baskets)
  public prop: Prop;

  @ManyToOne(() => User, (user) => user.propBaskets)
  public user: User;
}
