import HTTPStatus from 'http-status';

import User from './user.model';

const toJSON = (user) => {
    return {
        email: user.email,
        name: `${user.firstName} ${user.lastName}`
    }
}

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