import { Router } from 'express';

import * as webController from './web.controllers';
import { authJWT } from '../../services/auth.services';

const routes = new Router();

routes.post('/', authJWT, webController.addWeb);

export default routes;