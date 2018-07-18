import Web from '../modules/webs/web.model';

export const isOwner = async (req, res, next) => {
    console.log(req.body);
    const web = await Web.findById(req.body.id);
    console.log
    if (web.userId === req.user.id) {
        console.log('patta');
        return next();
    }
    return res.status(401).json({ msg: 'You are not the owner!' });
}