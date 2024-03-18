import { IsString } from "class-validator";

export class CreatePropDto {
    @IsString()
    slug: string;

    @IsString()
    readableName: string;

    @IsString()
    colour: string;
}
