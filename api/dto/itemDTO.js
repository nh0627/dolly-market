import { Mysql } from '../util'
import { Item, User, Image, Tag } from '../model'
import { itemQuery, imageQuery, tagQuery } from '../query'

class ItemDTO extends Mysql {

    async get() {
        const queryResult = await super.executeQuery(itemQuery.getItems())
        const itemList = [];

        await Promise.all(queryResult.map(async item => {
            item = this.getMasterImageInfo(item)

            item = this.getUserInfo(item)

            item = await this.getTagsByItemId(item)  

            itemList.push(new Item(item))
        }))

        return itemList
    }

    async getById(itemId) {
        const queryResult = await super.executeQuery(itemQuery.getItemById(itemId))

        // !! row가 1 이상이면 exception 처리
        let item = queryResult[0]

        item = await this.getImagesByItemId(item)

        item = await this.getTagsByItemId(item)   

        item = this.getUserInfo(item)

        item = new Item(item)

        return item
    }

    getUserInfo(item) {
        // 유저 정보 추가
        const profileImage = {
            pid: item.user_file_pid,
            create_date: item.user_file_create_date,
            file_name: item.user_file_name,
            file_url: item.user_file_url
        }

        const user = {
            pid: item.user_pid,
            create_date: item.user_create_date,
            modify_date: item.user_modify_date,
            email: item.user_email,
            nickname: item.user_nickname,
            image: profileImage
        }

        item['user'] = new User(user)
        return item
    }

    getMasterImageInfo(item) {
        // 마스터 이미지 리스트 추가
        const masterImage = {
            pid: item.master_file_pid,
            create_date: item.master_file_create_date,
            file_name: item.master_file_name,
            file_url: item.master_file_url,
            file_size: item.master_file_size,
            master_flag: item.master_file_master_flag
        }

        const imageArr = []

        imageArr.push(new Image(masterImage))

        item['images'] = imageArr

        return item
    }

    async getImagesByItemId(item) {
        const imageQueryResult = await super.executeQuery(imageQuery.getImagesByItemId(item.pid))

        const imageList = []

        imageQueryResult.map(result => {
            imageList.push(new Image(result))
        })

        item['images'] = imageList

        return item
    }

    async getTagsByItemId(item) {
        const tagQueryResult = await super.executeQuery(tagQuery.getTagsByItemId(item.pid))

        const tagList = []

        tagQueryResult.map(result => {
            tagList.push(new Tag(result))
        })

        item['tags'] = tagList

        return item
    }
}

export default new ItemDTO()