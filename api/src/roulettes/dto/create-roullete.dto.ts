import { IsString } from "class-validator";

export class CreateRoulleteDto {
    @IsString()
    slug: string;

    @IsString()
    readableName: string;
}
