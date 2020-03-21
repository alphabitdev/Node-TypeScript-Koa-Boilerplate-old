"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const cors_1 = __importDefault(require("@koa/cors"));
const koa_requestid_1 = __importDefault(require("koa-requestid"));
const koa_helmet_1 = __importDefault(require("koa-helmet"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const logger_1 = __importDefault(require("./util/logger"));
const logger_2 = __importDefault(require("./middleware/logger"));
const public_1 = __importDefault(require("./route/public"));
const cors_2 = __importDefault(require("./config/cors"));
class App extends koa_1.default {
    constructor() {
        super();
        this.handleError = (err, ctx) => {
            logger_1.default.debug('handle this');
            logger_1.default.debug(err.name);
            logger_1.default.error(err.message);
            logger_1.default.debug(ctx.request);
            if (err.stack !== undefined) {
                logger_1.default.info(err.stack.toString());
            }
        };
        this.configureMiddleware = () => {
            this.use(koa_helmet_1.default());
            this.use(koa_requestid_1.default());
            this.use(logger_2.default(logger_1.default));
            this.use(koa_bodyparser_1.default({
                enableTypes: ['json'],
                jsonLimit: '10mb'
            }));
            this.use(cors_1.default(cors_2.default));
        };
        this.configureMiddleware();
        this.use(public_1.default.routes()).use(public_1.default.allowedMethods());
        // Handle uncaught errors
        this.on('error', this.handleError);
    }
}
exports.default = new App();
//# sourceMappingURL=../src/dist/app.js.map