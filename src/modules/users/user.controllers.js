import HTTPStatus from 'http-status';
import jwt from 'jsonwebtoken';

import User from './user.model';
import constants from '../../config/constants';

const createToken = (user) => {
    return jwt.sign({
        email: user.email
    },
    constants.JWT_SECRET
    )
};

const toJSON = (user) => {
    return {
        email: user.email,
        token: `bearer ${createToken(user)}`
    }
};

export const signup = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(HTTPStatus.CREATED).json(user);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
};

export const login = (req, res, next) => {
    res.status(HTTPStatus.CREATED).json(toJSON(req.user));

    // return next();
};