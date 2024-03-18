import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({ name: 'props' })
export class Prop {
    @PrimaryColumn({ unique: true })
    slug: string;
    
    @Column()
    readableName: string;

    @Column()
    colour: string;
}
