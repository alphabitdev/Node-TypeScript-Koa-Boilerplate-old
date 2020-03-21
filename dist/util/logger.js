"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const logger_1 = __importDefault(require("../config/logger"));
const fileTransports = [];
for (let i = 0; i < logger_1.default.levels.length; i += 1) {
    const element = logger_1.default.levels[i];
    fileTransports.push(new winston_1.default.transports.File({ filename: element.file, level: element.name }));
}
const debugLevel = process.env.NODE_ENV === 'production' ? 'error' : 'debug';
const options = {
    level: logger_1.default.debugLogging ? 'debug' : 'info',
    transports: [
        ...fileTransports,
        new winston_1.default.transports.Console({
            level: debugLevel,
            format: winston_1.default.format.combine(winston_1.default.format.errors({ stack: true }), winston_1.default.format.json(), winston_1.default.format.timestamp(), winston_1.default.format.colorize(), winston_1.default.format.simple(), winston_1.default.format.printf(({ timestamp, level, message, ...rest }) => {
                let restString = JSON.stringify(rest, undefined, 2);
                let msgString = message;
                if (typeof message === 'object') {
                    msgString = JSON.stringify(message, undefined, 2);
                }
                restString = restString === '{}' ? '' : restString;
                return `[${timestamp}] ${level} - ${msgString} ${restString}`;
            }))
        })
    ]
};
const logger = winston_1.default.createLogger(options);
logger.debug(`Logging initialized at ${debugLevel} level`);
exports.default = logger;
//# sourceMappingURL=../../src/dist/util/logger.js.map