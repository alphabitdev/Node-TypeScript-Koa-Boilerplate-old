"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server_1 = __importDefault(require("./config/server"));
const logger_1 = __importDefault(require("./util/logger"));
class AppServer {
    constructor(callback) {
        this.signals = ['SIGTERM', 'SIGINT', 'SIGUSR2'];
        this.startServer = () => {
            // create a promise so we can wait for server to start listening
            return new Promise((resolve, reject) => {
                this.server.listen(server_1.default.port, server_1.default.host, () => {
                    // remove the error listener we put in to reject the promise on error
                    this.server.removeAllListeners('error');
                    // set new errorHandler
                    // this.server.on('error', this.errorHandler)
                    resolve(`${server_1.default.host}:${server_1.default.port}`);
                });
                this.server.on('error', e => {
                    reject(e);
                });
            });
        };
        // catch terminate signals
        this.signals.forEach((signal) => {
            process.once(signal, (sig) => this.terminate(sig));
        });
        // catch unhandled promise rejections
        process.on('unhandledRejection', (reason, promise) => {
            logger_1.default.error('unhandledRejection');
            if (reason !== undefined && reason !== null) {
                logger_1.default.error('here?');
                logger_1.default.error(JSON.stringify(reason));
            }
            promise.catch(e => {
                logger_1.default.error('aaaaaaaaaaa');
                logger_1.default.error(e);
            });
            logger_1.default.error('if this happens you fucked up and prob no info');
        });
        // catch unhandled exceptions
        process.on('uncaughtException', (err) => {
            logger_1.default.error('uncaughtException');
            logger_1.default.error(err);
        });
        // create http server
        this.server = http_1.default.createServer(callback);
    }
    terminate(signal) {
        try {
            this.server.close();
        }
        finally {
            logger_1.default.info(`Signal: ${signal}, App terminated`);
            // process.kill(process.pid, signal);
        }
    }
}
exports.default = AppServer;
//# sourceMappingURL=../src/dist/server.js.map