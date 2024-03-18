import { plainToClass, classToPlain } from '@nestjs/class-transformer';
import { Prop } from '../entities/prop.entity';

export class CreatePropDto {
    slug: string;

    readableName: string;

    colour: string;
}
