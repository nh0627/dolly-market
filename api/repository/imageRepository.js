import { imageQuery } from '../query'
import { Image } from '../model'
import { MySQLRepositoryBase } from '../../server/base/'

class ImageRepository extends MySQLRepositoryBase {

    constructor() {
        super(imageQuery)
    }
    
    async getById(imgId) {
        const image = await this.executeQuery(this.query.getById(imgId))
        return image
    }

    async getByItemId(itemId) {
        const imageList = await this.executeQuery(this.query.getByItemId(itemId))

        imageList.map(image => image = new Image(image))
        
        return imageList
    }

}

export default ImageRepository