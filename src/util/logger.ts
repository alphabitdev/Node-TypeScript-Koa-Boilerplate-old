import winston from 'winston';
import config from '../config/logger';

const fileTransports: winston.transports.FileTransportInstance[] = [];

for (let i = 0; i < config.levels.length; i += 1) {
  const element = config.levels[i];
  fileTransports.push(new winston.transports.File({ filename: element.file, level: element.name }));
}

const debugLevel = process.env.NODE_ENV === 'production' ? 'error' : 'debug';
const options: winston.LoggerOptions = {
  level: config.debugLogging ? 'debug' : 'info',
  transports: [
    ...fileTransports,
    new winston.transports.Console({
      level: debugLevel,
      format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.json(),
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.printf(({ timestamp, level, message, ...rest }) => {
          let restString = JSON.stringify(rest, undefined, 2);
          let msgString = message;
          if (typeof message === 'object') {
            msgString = JSON.stringify(message, undefined, 2);
          }
          restString = restString === '{}' ? '' : restString;
          return `[${timestamp}] ${level} - ${msgString} ${restString}`;
        })
      )
    })
  ]
};

const logger = winston.createLogger(options);

logger.debug(`Logging initialized at ${debugLevel} level`);

export default logger;
