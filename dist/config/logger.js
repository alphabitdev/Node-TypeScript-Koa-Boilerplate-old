"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env' });
const isDevMode = process.env.NODE_ENV === 'development';
const debugLevel = {
    name: 'debug',
    file: 'log/debug.log',
    level: 0
};
const errorLevel = {
    name: 'error',
    file: 'log/error.log',
    level: 100
};
const warnLevel = {
    name: 'warn',
    file: 'log/warn.log',
    level: 400
};
const infoLevel = {
    name: 'info',
    file: 'log/info.log',
    level: 500
};
const config = {
    debugLogging: isDevMode,
    levels: [debugLevel, errorLevel, warnLevel, infoLevel]
};
exports.default = config;
//# sourceMappingURL=../../src/dist/config/logger.js.map