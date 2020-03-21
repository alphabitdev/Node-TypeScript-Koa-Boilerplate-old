import Koa from 'koa';
import winston from 'winston';
import log from '../util/logger';

export default function logger(winstonInstance: winston.Logger) {
  log.debug('Create logger middleware');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async (ctx: Koa.Context, next: () => Promise<any>) => {
    const start = new Date().getTime();

    await next();

    const ms = new Date().getTime() - start;

    let logLevel = 'debug';
    if (ctx.status >= 500) {
      logLevel = 'error';
    } else if (ctx.status >= 400) {
      logLevel = 'warn';
    } else if (ctx.status >= 100) {
      logLevel = 'info';
    }

    const msg = `${ctx.method} ${ctx.originalUrl} ${ctx.status} ${ms}ms`;

    winstonInstance.log(logLevel, msg);
    winstonInstance.debug(
      `${ctx.state.id} ${ctx.method} ${
        ctx.originalUrl
      } ${ctx.response.status.toString()} ${ctx.message.toString()}`
    );
    // winstonInstance.debug(ctx.request);
  };
}
