import { errorToNext } from "../../server/util"
import { methods } from "../constant"

class RouteBase {
  constructor(path, ControllerClass) {
    this.methods = methods
    this.path = path
    this.controller = new ControllerClass()
    this.addRoutes = this.addRoutes.bind(this)
  }

  setRouter(router) {
    this.router = router
  }

  addRoute(uri, httpMethod, boundAction) {
    this.router[httpMethod](
      `${this.path + uri}`,
      this.asyncWrapper(boundAction)
    )
  }

  asyncWrapper(boundAction) {
    return (req, res, next) =>
      boundAction
        .bind(this.controller)(req, res, next)
        .catch((err) => {
          errorToNext(err, next)
        })
  }
}

export default RouteBase
