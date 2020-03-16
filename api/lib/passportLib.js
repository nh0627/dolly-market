import passport from 'passport'
import passportJWT from 'passport-jwt'
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt
import passportLocal from 'passport-local'
const LocalStrategy = passportLocal.Strategy
import { userService } from '../service'
require('dotenv').config()

export const passportStrategy = () => {
    // Local Strategy
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        function (email, password, done) {
            return userService.getAuth(email, password)
                .then(user => {
                    if (!user) {
                        return done(null, false, { message: 'Incorrect email or password.' })
                    }
                    return done(null, user, { message: 'Signed in successfully' })
                })
                .catch(err => done(err))
        }
    ))

    //JWT Strategy
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    },
        function (jwtPayload, done) {
            // Todo: 에러처리
            return userService.getUserByEmail(jwtPayload.email)
                .then(user => {
                    return done(null, user)
                })
                .catch(err => {
                    return done(err)
                })
        }
    ))
}