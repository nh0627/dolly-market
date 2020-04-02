import { RouteBase } from '../../server/base'
import { paths, methods } from '../constant'
import { ItemController } from '../controller'

class ItemRoute extends RouteBase {
  constructor() {
    super(paths.ITEMS, ItemController)
  }

  addRoutes() {
    this.addRoute('/', methods.GET, this.controller.get)
    this.addRoute('/:pid', methods.GET, this.controller.getById)
  }

}

export default ItemRoute