import { IsString } from 'class-validator';

export class UpdateRoulleteDto {
  @IsString()
  readableName: string;
}
