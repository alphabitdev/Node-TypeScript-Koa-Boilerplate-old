"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const index_1 = __importDefault(require("../controller/index"));
const indexRouter = new koa_router_1.default();
indexRouter.get('/', index_1.default.index);
exports.default = indexRouter;
//# sourceMappingURL=../../src/dist/route/index.js.map