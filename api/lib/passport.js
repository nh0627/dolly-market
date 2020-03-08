const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
    // Local Strategy
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function (email, password, done) {
            // 이 부분에선 저장되어 있는 User를 비교하면 된다. 
            return UserModel.findOne({where: {email: email, password: password}})
                .then(user => {
                    if (!user) {
                        return done(null, false, {message: 'Incorrect email or password.'});
                    }
                    return done(null, user, {message: 'Signed in successfully'});
                })
                .catch(err => done(err));
        }
    ));
    
    //JWT Strategy
    passport.use(new JWTStrategy({
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey   : process.env.JWT_SECRET
        },
        function (jwtPayload, done) {
            return UserModel.findOneById(jwtPayload.id)
                .then(user => {
                    return done(null, user);
                })
                .catch(err => {
                    return done(err);
                });
        }
    ));
}