import { getEnvValue } from 'src/config';
import { DataSource } from 'typeorm';

const path = require('path')
const envFilePath = path.resolve(__dirname, '../../.env');
require('dotenv').config({ path: envFilePath });

console.log(path.resolve(__dirname, '../dist/db/*js'));
export default new DataSource({
    migrations: [path.resolve(__dirname, '../dist/db/*js')],
    migrationsTableName: 'migrations',
    host: getEnvValue('POSTGRES_HOST'),
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: getEnvValue('POSTGRES_USER'),
    password: getEnvValue('POSTGRES_PASSWORD'),
    database: getEnvValue('POSTGRES_DB'),
    type: 'postgres',
    entities: [__dirname + '../../**/*.entity.js'], // all files with .entity.ts suffix,
});