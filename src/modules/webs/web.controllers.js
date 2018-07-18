import HTTPStatus from 'http-status';

import Web from './web.model';

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

export const getWebs = async (req, res) => {
    try {
        const webs = await Web.findAll({
            where: {
                userId: req.user.id
            }
        });
        return res.status(HTTPStatus.OK).json(webs);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

export const getWeb = async (req, res) => {
    try {
        const web = await Web.findById(req.params.id);
        return res.status(HTTPStatus.OK).json(web);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);        
    }
}

export const updateWeb = async (req, res) => {
    try {
        console.log('Hello brother!!')
        const web = await Web.update(
            { ...req.body },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        return res.status(HTTPStatus.OK).json(web);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

export const deleteWeb = async (req, res) => {
    try {
        const web = await Web.findOne({
            where: {
                id: req.body.id
            }
        });
        console.log('web', web)
        await web.destroy();
        return res.status(HTTPStatus.OK).send();
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
