import passport from 'passport';
import LocalStrategy from 'passport-local';

import User from '../modules/users/user.model';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

const localOpts = {
    usernameField: 'email',
}

const localStrategy = new LocalStrategy(localOpts, async (email, password, done) => {
    try {
        const user = await User.findOne({
            where: { email: email }
        });
        if(!user) {
            return done(null, false);
        }
        if(password !== user.password) {
            return done(null, false);
        }
        return done(null, user.get());
    } catch (e) {
        return done(e, false);
    }
});

passport.use(localStrategy);

export const authLocal = passport.authenticate('local', { session: false });
