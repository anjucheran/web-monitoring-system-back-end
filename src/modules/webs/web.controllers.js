import HTTPStatus from 'http-status';

import User from '../users/user.model';
import Web from './web.model';
import constants from '../../config/constants';

export const addWeb = async (req, res) => {
    try {
        const web = await Web.create({
            ...req.body,
            userId: req.user.id
        });
        console.log(web);
        return res.status(HTTPStatus.CREATED).json(web);
    } catch (e) {
        console.log(e);
        return res.status(HTTPStatus.BAD_REQUEST).json(e);        
    }
};