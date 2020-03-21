#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const app_1 = __importDefault(require("./app"));
const logger_1 = __importDefault(require("./util/logger"));
const appServer = new server_1.default(app_1.default.callback());
appServer
    .startServer()
    .then(res => {
    logger_1.default.info(`Server started ${res}`);
})
    .catch(err => {
    logger_1.default.error(err);
});
//# sourceMappingURL=../src/dist/index.js.map