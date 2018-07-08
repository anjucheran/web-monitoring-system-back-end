import { Router } from 'express';

import * as userController from './user.controllers';
import { authLocal, authJWT } from '../../services/auth.services';

const routes = new Router();

// signup
routes.post('/signup', userController.signup);

// login
routes.post('/login', authLocal, userController.login);

// routes.get('/webs', authJWT, userController.getWebs);

export default routes;
