#!/usr/bin/env node

import AppServer from './server';
import App from './app';
import log from './util/logger';

const appServer = new AppServer(App.callback());
appServer
  .startServer()
  .then(res => {
    log.info(`Server started ${res}`);
  })
  .catch(err => {
    log.error(err);
  });
