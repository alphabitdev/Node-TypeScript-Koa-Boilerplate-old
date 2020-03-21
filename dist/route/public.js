"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const public_1 = __importDefault(require("../controller/public"));
const publicRouter = new koa_router_1.default();
publicRouter.get('/', public_1.default.welcome);
publicRouter.get('/status', public_1.default.status);
exports.default = publicRouter;
//# sourceMappingURL=../../src/dist/route/public.js.map