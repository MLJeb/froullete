import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PropsModule } from './props/props.module';

import getCustomOptions from './config';
import { RoulletesModule } from './roulettes/roulletes.module';

const options =  getCustomOptions();
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: options.envFilePath
    }),
    TypeOrmModule.forRoot(options.database),
    PropsModule,
    RoulletesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
