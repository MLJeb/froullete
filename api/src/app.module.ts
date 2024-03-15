import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import getCustomOptions from './config';

const options =  getCustomOptions();
console.log(options.database)

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: options.envFilePath
    }),
    TypeOrmModule.forRoot(options.database),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
