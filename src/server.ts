import http, { IncomingMessage, ServerResponse, Server } from 'http';
import { Http2ServerRequest, Http2ServerResponse } from 'http2';
import config from './config/server';
import log from './util/logger';

export default class AppServer {
  signals: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

  server: Server;

  constructor(
    callback: (
      req: IncomingMessage | Http2ServerRequest,
      res: ServerResponse | Http2ServerResponse
    ) => void
  ) {
    // catch terminate signals
    this.signals.forEach((signal: NodeJS.Signals) => {
      process.once(signal, (sig: NodeJS.Signals) => this.terminate(sig));
    });

    // catch unhandled promise rejections
    process.on('unhandledRejection', (reason: {} | null | undefined, promise: Promise<any>) => {
      log.error('unhandledRejection');
      if (reason !== undefined && reason !== null) {
        log.error('here?');
        log.error(JSON.stringify(reason));
      }
      promise.catch(e => {
        log.error('aaaaaaaaaaa');
        log.error(e);
      });
    });
    // catch unhandled exceptions
    process.on('uncaughtException', (err: Error) => {
      log.error('uncaughtException');
      log.error(err);
    });
    // create http server
    this.server = http.createServer(callback);
  }

  startServer = () => {
    // create a promise so we can wait for server to start listening
    return new Promise((resolve, reject) => {
      this.server.listen(config.port, config.host, () => {
        // remove the error listener we put in to reject the promise on error
        this.server.removeAllListeners('error');
        // set new errorHandler
        // this.server.on('error', this.errorHandler)
        resolve(`${config.host}:${config.port}`);
      });
      this.server.on('error', e => {
        reject(e);
      });
    });
  };

  terminate(signal: string | number | undefined) {
    try {
      this.server.close();
    } finally {
      log.info(`Signal: ${signal}, App terminated`);
      // process.kill(process.pid, signal);
    }
  }
}
