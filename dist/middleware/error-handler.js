"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import InvalidRequestBodyFormat from '../error/client-failure/invalid-request-body-format';
const logger_1 = __importDefault(require("../util/logger"));
const Response_1 = __importDefault(require("../util/Response"));
/**
 * Return middleware that handle exceptions in Koa.
 * Dispose to the first middleware.
 *
 * @return {function} Koa middleware.
 */
exports.default = () => {
    logger_1.default.debug('Create error-handler middleware');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async (ctx, next) => {
        try {
            const response = await next();
            // Respond 404 Not Found for unhandled request
            if (!ctx.body && (!ctx.status || ctx.status === 404)) {
                logger_1.default.debug(`${ctx.state.id} Unhandled by router`);
                return Response_1.default.notFound(ctx);
            }
            return response;
        }
        catch (err) {
            logger_1.default.error(`${ctx.state.id} ${err.name}`);
            logger_1.default.debug(`${ctx.state.id} ${err.stack}`);
            // if (err instanceof InvalidRequestBodyFormat) {
            //   return Response.unprocessableEntity(ctx, INVALID_REQUEST_BODY_FORMAT);
            // }
            return Response_1.default.internalServerError(ctx);
        }
    };
};
//# sourceMappingURL=../../src/dist/middleware/error-handler.js.map