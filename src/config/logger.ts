import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export interface LogConfig {
  debugLogging: boolean;
  levels: Level[];
}
export interface Level {
  name: string;
  file: string;
  level: number;
}
const isDevMode = process.env.NODE_ENV === 'development';

const debugLevel: Level = {
  name: 'debug',
  file: 'log/debug.log',
  level: 0
};
const errorLevel: Level = {
  name: 'error',
  file: 'log/error.log',
  level: 100
};
const warnLevel: Level = {
  name: 'warn',
  file: 'log/warn.log',
  level: 400
};
const infoLevel: Level = {
  name: 'info',
  file: 'log/info.log',
  level: 500
};
const config: LogConfig = {
  debugLogging: isDevMode,
  levels: [debugLevel, errorLevel, warnLevel, infoLevel]
};

export default config;
