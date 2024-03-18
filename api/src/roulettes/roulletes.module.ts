import { Module } from '@nestjs/common';
import { RoulletesService } from './roulletes.service';
import { RoulletesController } from './roulletes.controller';
import { Roullete } from './entities/roullete.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoulleteToProp } from './entities/roulleteToProp.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Roullete]),
    TypeOrmModule.forFeature([RoulleteToProp]),
  ], 
  controllers: [RoulletesController],
  providers: [RoulletesService],
})
export class RoulletesModule {}
