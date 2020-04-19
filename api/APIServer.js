import passport from "passport"
import createError from "http-errors"
import morgan from "morgan"

import { passportStrategy } from "./util"
import { ServerBase } from "../server/base"

class APIServer extends ServerBase {
  constructor(routes) {
    super()
    this.isListenable = false
    this.routes = routes
  }

  registerMiddlewares() {
    this.app.use(this.express.json())
    this.app.use(passport.initialize())
    passportStrategy()
    this.app.use(morgan("tiny"))
  }

  registerRoutes() {
    // Todo: 더 나은 방법이 없을까
    if (this.routes)
      this.routes.forEach((routeBuilder) => {
        routeBuilder.setRouter(this.router)
        routeBuilder.addRoutes()
        this.app.use(routeBuilder.router)
      })
  }

  run() {
    super.run()
    this.errorHandler()
  }

  // Todo: 얘의 거취 고민
  errorHandler() {
    this.app.use((req, res, next) => {
      next(new createError(404))
    })

    this.app.use((error, req, res, next) => {
      const { status, message } = error
      res.status(status).json({ message })
    })
  }
}

export default APIServer
