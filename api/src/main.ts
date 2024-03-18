import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { EntityNotFoundExceptionFilter } from './app.filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new EntityNotFoundExceptionFilter());
  await app.listen(3000);
}
bootstrap();
