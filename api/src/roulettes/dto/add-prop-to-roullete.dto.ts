import { IsNumber, IsString } from "class-validator";

export class AddPropToRoulleteDTO {
    @IsString()
    propSlug: string;

    @IsString()
    roulleteSlug: string;

    @IsNumber()
    weight: number;
}
