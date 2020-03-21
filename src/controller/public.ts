import { BaseContext } from 'koa';

export default class PublicController {
  public static async welcome(ctx: BaseContext) {
    ctx.body = 'welcome';
  }

  public static async status(ctx: BaseContext) {
    ctx.body = { status: 'ok' };
  }
}
