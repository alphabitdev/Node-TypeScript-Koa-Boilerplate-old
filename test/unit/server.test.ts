/* eslint-disable no-undef */
import AppServer from '../../src/server';
import App from '../../src/app';
import { Server } from 'http';
import config from '../../src/config/server';

let server:AppServer;

afterAll(async () => {
  server.server.close()
});

describe('AppServer', () => {
    server = new AppServer(App.callback());
  it('should define `AppServer` class', () => {
    expect(server).toBeDefined();
    expect(server).toBeInstanceOf(AppServer)
    expect(server).toHaveProperty('server');
  });
  

  it('startResult should be '+config.host+':'+config.port, async () => {
    const startResult = await server.startServer();
    expect(startResult).toBe(config.host+':'+config.port)
  });
  it('server.server should define `http.Server` class', () => {
    expect(server.server).toBeDefined();
    expect(server.server).toBeInstanceOf(Server)
  });
  it('server.server should be listening', () => {
    expect(server.server.listening).toBe(true)
  });
  it('server.server should not be listening after calling terminate', () => {
    server.terminate("TEST KILL");
    expect(server.server.listening).toBe(false)
  });
})
