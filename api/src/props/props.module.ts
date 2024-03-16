import { Module } from '@nestjs/common';
import { PropsService } from './props.service';
import { PropsController } from './props.controller';
import { Prop } from './entities/prop.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Prop])], 
  controllers: [PropsController],
  providers: [PropsService],
})
export class PropsModule {}
