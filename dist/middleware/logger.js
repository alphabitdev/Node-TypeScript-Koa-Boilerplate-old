"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../util/logger"));
function logger(winstonInstance) {
    logger_1.default.debug('Create logger middleware');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async (ctx, next) => {
        const start = new Date().getTime();
        await next();
        const ms = new Date().getTime() - start;
        let logLevel = 'debug';
        if (ctx.status >= 500) {
            logLevel = 'error';
        }
        else if (ctx.status >= 400) {
            logLevel = 'warn';
        }
        else if (ctx.status >= 100) {
            logLevel = 'info';
        }
        const msg = `${ctx.method} ${ctx.originalUrl} ${ctx.status} ${ms}ms`;
        winstonInstance.log(logLevel, msg);
        winstonInstance.debug(`${ctx.state.id} ${ctx.method} ${ctx.originalUrl} ${ctx.response.status.toString()} ${ctx.message.toString()}`);
        // winstonInstance.debug(ctx.request);
    };
}
exports.default = logger;
//# sourceMappingURL=../../src/dist/middleware/logger.js.map