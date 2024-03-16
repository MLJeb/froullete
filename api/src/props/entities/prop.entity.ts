import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({ name: 'props' })
export class Prop {
    @PrimaryColumn()
    slug: string;
    
    @Column()
    readableName: string;

    @Column()
    colour: string;
}
