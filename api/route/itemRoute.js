import { RouteBase } from "../../server/base"
import { paths } from "../constant"
import { ItemController } from "../controller"

class ItemRoute extends RouteBase {
  constructor() {
    super(paths.ITEMS, ItemController)
  }

  addRoutes() {
    this.addRoute("/", this.methods.GET, this.controller.get)
    this.addRoute("/:pid", this.methods.GET, this.controller.getById)
    this.addRoute("/", this.methods.POST, this.controller.save)
  }
}

export default ItemRoute
