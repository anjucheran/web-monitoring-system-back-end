import { Router } from 'express';

import * as webController from './web.controllers';
import { authJWT } from '../../services/auth.services';
import { isOwner } from '../../services/middleware.services';

const routes = new Router();

routes.post('/', authJWT, webController.addWeb);

routes.get('/', authJWT, webController.getWebs);

routes.get('/:id', authJWT, isOwner, webController.getWeb);

routes.post('/delete', authJWT, isOwner, webController.deleteWeb);

routes.post('/:id', authJWT, isOwner, webController.updateWeb);



export default routes;