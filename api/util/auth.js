import passport from "passport"
import passportJWT from "passport-jwt"
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt
import passportLocal from "passport-local"
const LocalStrategy = passportLocal.Strategy
import jwt from "jsonwebtoken"
import crypto from "crypto"

import { UserRepository } from "../repository"

require("dotenv").config()

export const passportStrategy = () => {
  // Local Strategy
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      (email, password, done) => {
        return new UserRepository()
          .getAuth(email, password)
          .then((user) => done(null, user))
          .catch((err) => done(err))
      }
    )
  )

  //JWT Strategy
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
      (jwtPayload, done) => {
        return new UserRepository()
          .getUserByEmail(jwtPayload.email)
          .then((user) => done(null, user))
          .catch((err) => done(err))
      }
    )
  )
}

export const issueToken = (user) => {
  const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET)
  return token
}

export const encriptPassword = (password) => {
  const inputPassword = password
  const salt = process.env.PASSWORD_SECRET
  const hashPassword = crypto
    .createHash("sha512")
    .update(inputPassword + salt)
    .digest("hex")

  return hashPassword
}
