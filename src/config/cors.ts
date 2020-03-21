export interface CorsConfig {
  allowMethods: Array<string>;
  allowHeaders: Array<string>;
  exposeHeaders: Array<string>;
}

const config: CorsConfig = {
  allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length', 'Date', 'X-Request-Id']
};

export default config;
