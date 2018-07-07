import userRoutes from './users/user.routes';
import webRoutes from './webs/web.routes';

import { authJWT } from '../services/auth.services';

export default (app) => {
    app.use('/api/v1/users', userRoutes);
    app.use('/api/v1/webs', webRoutes);
};