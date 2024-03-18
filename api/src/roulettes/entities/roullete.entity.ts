import { AfterLoad, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { RoulleteToProp } from './roulleteToProp.entity';
import { Exclude, Expose } from '@nestjs/class-transformer';
import { Prop } from 'src/props/entities/prop.entity';
import { IsArray, IsInt, Min } from 'class-validator';

@Entity({ name: 'roulletes' })
export class Roullete {
  @PrimaryColumn({ unique: true })
  slug: string;

  @Column()
  readableName: string;

  @OneToMany(() => RoulleteToProp, (roulleteToProp) => roulleteToProp.roullete, { onDelete: 'CASCADE' })
  @Exclude()
  public roulleteToProps: RoulleteToProp[];

  @IsArray()
  props: Prop[];

  @Column({ default: 1 })
  @IsInt()
  @Min(1)
  price: number;
}
