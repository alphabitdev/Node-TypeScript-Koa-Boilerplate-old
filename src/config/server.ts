import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
export interface ServerConfig {
  env: string;
  name: string;
  host: string;
  port: number;
}
const portString = process.env.APP_PORT || '7070';

const config: ServerConfig = {
  env: process.env.NODE_ENV || 'development',
  name: process.env.APP_NAME || 'Node-TypeScript-Koa',
  host: process.env.APP_HOST || 'localhost',
  // eslint-disable-next-line radix
  port: parseInt(portString)
};

export default config;
