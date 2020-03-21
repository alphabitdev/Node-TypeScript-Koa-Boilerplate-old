"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PublicController {
    static async welcome(ctx) {
        ctx.body = 'welcome';
    }
    static async status(ctx) {
        ctx.body = { status: 'ok' };
    }
}
exports.default = PublicController;
//# sourceMappingURL=../../src/dist/controller/public.js.map