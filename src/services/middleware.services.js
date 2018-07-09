import Web from '../modules/webs/web.model';

export const isOwner = async (req, res, next) => {
    const web = await Web.findById(req.params.id);
    if (web.userId === req.user.id) {
        return next();
    }
    return res.status(401).json({ msg: 'You are not the owner!' });
}