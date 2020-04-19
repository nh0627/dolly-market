import { RouteBase } from "../../server/base"
import { paths } from "../constant"
import { AuthController } from "../controller"

class AuthRoute extends RouteBase {
  constructor() {
    super(paths.AUTH, AuthController)
  }

  addRoutes() {
    this.addRoute("/login", this.methods.POST, this.controller.login)
    this.addRoute("/user", this.methods.GET, this.controller.user)
    this.addRoute("/signup", this.methods.POST, this.controller.save)
  }
}

export default AuthRoute
