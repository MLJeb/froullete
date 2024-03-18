import { PartialType } from '@nestjs/mapped-types';
import { CreatePropDto } from './create-prop.dto';

export class UpdatePropDto {
    readableName: string;
    colour: string;
}
