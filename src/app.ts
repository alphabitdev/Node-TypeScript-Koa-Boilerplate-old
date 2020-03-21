import Koa from 'koa';
import cors from '@koa/cors';
import requestId from 'koa-requestid';
import helmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';
import log from './util/logger';
import loggerMiddleware from './middleware/logger';
import indexRouter from './route/public';
import corsConfig from './config/cors';

class App extends Koa {
  constructor() {
    super();
    this.configureMiddleware();
    this.use(indexRouter.routes()).use(indexRouter.allowedMethods());
    // Handle uncaught errors
    // this.on('error', this.handleError);
  }

  // handleError = (err: Error, ctx: Koa.ExtendableContext) => {
  //   log.debug('handle this');
  //   log.debug(err.name);
  //   log.error(err.message);
  //   log.debug(ctx.request);
  //   if (err.stack !== undefined) {
  //     log.info(err.stack.toString());
  //   }
  // };

  configureMiddleware = () => {
    this.use(helmet());
    this.use(requestId());
    this.use(loggerMiddleware(log));
    this.use(
      bodyParser({
        enableTypes: ['json'],
        jsonLimit: '10mb'
      })
    );
    this.use(cors(corsConfig));
  };
}

export default new App();
