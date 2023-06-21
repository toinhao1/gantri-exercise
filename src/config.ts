import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const staging = env === 'staging';
const prod = env === 'production';
const dev = env === 'development';
const test = env === 'test';

const protocol = process.env.PROTOCOL || 'http';
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '4000';
const apiBaseUrl = `${protocol}://${host}:${port}`;

const mongodbHost = process.env.MONGODB_HOST || '127.0.0.1';
const mongodbUrl = process.env.MONGODB_URL || `mongodb://${mongodbHost}:27017/${env}`;

export { env, staging, prod, dev, test, protocol, host, port, apiBaseUrl, mongodbUrl };
