"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env' });
const portString = process.env.APP_PORT || '7070';
const config = {
    env: process.env.NODE_ENV || 'development',
    name: process.env.APP_NAME || 'Node-TypeScript-Koa',
    host: process.env.APP_HOST || 'localhost',
    // eslint-disable-next-line radix
    port: parseInt(portString)
};
exports.default = config;
//# sourceMappingURL=../../src/dist/config/server.js.map