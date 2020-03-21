import Router from 'koa-router';
import publicController from '../controller/public';

const publicRouter = new Router();
publicRouter.get('/', publicController.welcome);
publicRouter.get('/status', publicController.status);
export default publicRouter;
