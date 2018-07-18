import HTTPStatus from 'http-status';
import jwt from 'jsonwebtoken';

import User from './user.model';
import constants from '../../config/constants';

const createToken = (user) => {
    return jwt.sign({
        id: user.id
    },
        constants.JWT_SECRET
    )
};

const toJSON = (user) => {
    return {
        email: user.email,
        id: user.id,
        token: `bearer ${createToken(user)}`
    }
};

export const signup = async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.create(req.body);
        return res.status(HTTPStatus.CREATED).json(user);
    } catch (e) {
        console.log(e);
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
};

export const login = (req, res) => {
    res.status(HTTPStatus.OK).json(toJSON(req.user));
};
