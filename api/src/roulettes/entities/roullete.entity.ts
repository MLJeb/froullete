import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { RoulleteToProp } from "./roulleteToProp.entity";
import { Exclude, Expose } from "@nestjs/class-transformer";
import { Prop } from "src/props/entities/prop.entity";


@Entity({ name: 'roulletes' })
export class Roullete {
    @PrimaryColumn({ unique: true })
    slug: string;
    
    @Column()
    readableName: string;

    @Exclude()
    @OneToMany(() => RoulleteToProp, roulleteToProp => roulleteToProp.roullete)
    public roulleteToProps: RoulleteToProp[];

    @Expose()
    get props(): Prop[] {
        return this.roulleteToProps.map( rtp => rtp.prop );
    }
      
}

