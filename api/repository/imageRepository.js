import { imageQuery } from "../query"
import { Image } from "../model"
import { MySQLRepositoryBase } from "../../server/base/"

class ImageRepository extends MySQLRepositoryBase {
  constructor() {
    super(imageQuery)
  }

  async getById(imgId) {
    const _image = await this.executeQuery(this.query.getById(imgId))
    const image = new Image(_image)
    return image
  }

  async getByItemId(itemId) {
    const _imageList = await this.executeQuery(this.query.getByItemId(itemId))
    let imageList = _imageList.map((image) => new Image(image))
    return imageList
  }
}

export default ImageRepository
