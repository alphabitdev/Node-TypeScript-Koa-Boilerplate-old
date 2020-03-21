/* eslint-disable no-undef */
import AppServer from '../../src/server';
import App from '../../src/app';
import supertest from 'supertest';
import config from '../../src/config/server';


let server: AppServer;
let request: supertest.SuperTest<supertest.Test>

// beforeAll(async () => {
//     server = new AppServer(App.callback());
//     await server.startServer()
//   });
afterAll(async () => {
    server.terminate("TEST KILL")
});

describe('public', () => {
    server = new AppServer(App.callback());

    it('<200> should always return with ok', async () => {
        await server.startServer();
        request = supertest(server.server);
        const res = await request
            .get('/')
            .expect('Content-Type', /text\/plain/)
            .expect(200);
        expect(res.text).toBe('welcome');
    });

    it('<200>/status should always return with json {status:ok}', async () => {
        const res = await request
            .get('/status')
            .expect('Content-Type', /json/)
            .expect(200);
        expect(JSON.parse(res.text).status).toBe('ok')
    });
});