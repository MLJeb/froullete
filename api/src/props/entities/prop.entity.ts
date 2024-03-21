import { RoulleteToProp } from 'src/roulettes/entities/roulleteToProp.entity';
import { PropBasket } from 'src/users/entities/PropBasket.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'props' })
export class Prop {
  @PrimaryColumn({ unique: true })
  slug: string;

  @Column()
  readableName: string;

  @Column()
  colour: string;

  @OneToMany(() => RoulleteToProp, (roulleteToProp) => roulleteToProp.prop, { onDelete: 'CASCADE' })
  public roulleteToProps: Promise<RoulleteToProp[]>;

  @OneToMany(() => PropBasket, (basket) => basket.prop)
  public baskets: Promise<PropBasket[]>;
}
