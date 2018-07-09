import { Router } from 'express';

import * as webController from './web.controllers';
import { authJWT } from '../../services/auth.services';
import { isOwner } from '../../services/middleware.services';

const routes = new Router();

routes.post('/', authJWT, webController.addWeb);

routes.get('/', authJWT, webController.getWebs);

routes.get('/:id', authJWT, isOwner, webController.getWeb);

routes.put('/:id', authJWT, isOwner, webController.updateWeb);

routes.delete('/:id', authJWT, isOwner, webController.deleteWeb);

export default routes;