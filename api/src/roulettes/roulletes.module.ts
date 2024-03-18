import { Module } from '@nestjs/common';
import { RoulletesService } from './roulletes.service';
import { RoulletesController } from './roulletes.controller';
import { Roullete } from './entities/roullete.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoulleteToProp } from './entities/roulleteToProp.entity';
import { User } from 'src/users/entities/user.entity';
import { PropBasket } from 'src/users/entities/PropBasket.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Roullete]),
    TypeOrmModule.forFeature([RoulleteToProp]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([PropBasket]),
  ],
  controllers: [RoulletesController],
  providers: [RoulletesService],
})
export class RoulletesModule {}
