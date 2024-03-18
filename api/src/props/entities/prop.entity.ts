import { RoulleteToProp } from "src/roulettes/entities/roulleteToProp.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";


@Entity({ name: 'props' })
export class Prop {
    @PrimaryColumn({ unique: true })
    slug: string;
    
    @Column()
    readableName: string;

    @Column()
    colour: string;

    @OneToMany(() => RoulleteToProp, roulleteToProp => roulleteToProp.prop)
    public roulleteToProps: Promise<RoulleteToProp[]>;
}
