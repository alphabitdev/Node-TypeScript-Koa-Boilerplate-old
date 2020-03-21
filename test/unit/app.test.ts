/* eslint-disable no-undef */
import App from '../../src/app';
import Koa from 'koa';

describe('App', () => {
  it('should define `Koa` class', () => {
    expect(App).toBeDefined();
    expect(App).toBeInstanceOf(Koa)
    expect(App.callback).toBeDefined();
    
  });
})
