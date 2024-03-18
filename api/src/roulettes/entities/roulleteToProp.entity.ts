import { Prop } from "src/props/entities/prop.entity"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from "typeorm"
import { Roullete } from "./roullete.entity"

@Unique(["propSlug", "roulleteSlug"])
@Entity()
export class RoulleteToProp {
    @PrimaryGeneratedColumn()
    public propToRoulleteId: number

    @Column()
    public propSlug: string

    @Column()
    public roulleteSlug: string

    @ManyToOne(() => Prop, (prop) => prop.roulleteToProps)
    public prop: Prop

    @ManyToOne(() => Roullete, (roullete) => roullete.roulleteToProps)
    public roullete: Roullete
}