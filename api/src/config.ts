import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// env path set to project's root folder path
const path = require('path');
const envFilePath = path.resolve(__dirname, '../../../.env');
require('dotenv').config({ path: envFilePath });

export function getEnvValue(key: string, throwOnMissing = true): string {
  const value = process.env[key];
  if (!value && throwOnMissing) {
    throw new Error(
      `Improperly configured - ${key} value required in .env file`,
    );
  }

  return value;
}

function getDatabaseOptions(): TypeOrmModuleOptions {
  return {
    host: getEnvValue('POSTGRES_HOST'),
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: getEnvValue('POSTGRES_USER'),
    password: getEnvValue('POSTGRES_PASSWORD'),
    database: getEnvValue('POSTGRES_DB'),
    type: 'postgres',
    entities: ['**/*.entity.js'], // all files with .entity.ts suffix
    migrationsTableName: 'migrations',
    migrationsRun: false,
  };
}

export default () => ({
  database: getDatabaseOptions(),
  envFilePath,
});
