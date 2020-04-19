import passport from "passport"
import createError from "http-errors"

import { UserRepository } from "../repository"
import { issueToken } from "../util"
import { errorToNext } from "../../server/util"
import { ControllerBase } from "../../server/base"

class AuthController extends ControllerBase {
  constructor() {
    super(UserRepository)
  }

  async login(req, res, next) {
    passport.authenticate("local", { session: false }, (err, user) => {
      if (err) {
        return errorToNext(err, next)
      } else {
        const token = issueToken(user)
        this.ok(res, { token })
      }
    })(req, res)
  }

  // Todo: 공통 함수로 빼기
  async user(req, res, next) {
    passport.authenticate("jwt", { session: false }, (err, user) => {
      if (!user) return next(createError(403, "Forbidden"))
      if (err) errorToNext(err, next)
      return this.ok({ user })
    })(req, res)
  }

  async save(req, res) {
    const user = req.body
    await this.repository.save(user)
    const { email } = user
    this.created(res, { email })
  }
}

export default AuthController
