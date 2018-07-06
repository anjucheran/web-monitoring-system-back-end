import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { compareSync } from 'bcrypt-nodejs';

import User from '../modules/users/user.model';
import constants from '../config/constants';

const comparePassword = (user, password) => {
    console.log(password);
    return compareSync(password, user.password);
}

// local auth
const localOpts = {
    usernameField: 'email',
}

const localStrategy = new LocalStrategy(localOpts, async (email, password, done) => {
    try {
        const user = await User.findOne({
            where: { email: email }
        });
        if (!user) {
            return done(null, false);
        }
        if (!comparePassword(user, password)) {
            return done(null, false);
        }
        return done(null, user);
    } catch (e) {
        return done(e, false);
    }
});

//jwt auth
const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: constants.JWT_SECRET
}

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
    try {
        const user = await User.findOne({
            where: { email: payload.email }
        });
        if(!user) {
            return done(null, false);
        }
        return done(null, user.get());
    } catch (e) {
        return done(e, false);
    }
});

passport.use(localStrategy);
passport.use(jwtStrategy);

export const authLocal = passport.authenticate('local', { session: false });
export const authJWT = passport.authenticate('jwt', { session: false });
