import { IsInt, Min } from "class-validator";
import { AfterLoad, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PropBasket } from "./PropBasket.entity";
import { Exclude } from "class-transformer";
import { Expose } from "@nestjs/class-transformer";


export const REWARD_COOLDOWN_IN_MS = 60000;

export const CREDITS_REWARD = 1;

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true })
    username: string;
 
    @Column({default: 0})
    @IsInt()
    @Min(0)
    credits: number;

    @OneToMany(() => PropBasket, propBasket => propBasket.user)
    public propBaskets: Promise<PropBasket[]>;

    @Exclude()
    @Column({default: 0, type: 'bigint'})
    @IsInt()
    @Min(0)
    lastCreditReward: number;

    @IsInt()
    nextRewardIn: number;


    @IsInt()
    @AfterLoad()
    getNextRewardIn() {
        this.nextRewardIn = Math.max(
            (this.lastCreditReward  - Date.now()) / 1000 + 60,
            0
        )
    }


}
