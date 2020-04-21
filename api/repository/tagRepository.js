import { tagQuery } from "../query"
import { Tag } from "../model"
import { MySQLRepositoryBase } from "../../server/base/"

class TagRepository extends MySQLRepositoryBase {
  constructor() {
    super(tagQuery)
  }

  async getByItemId(itemId) {
    const _tagList = await this.executeQuery(this.query.getByItemId(itemId))
    let tagList = _tagList.map((tag) => new Tag(tag))
    return tagList
  }

  async getByItemIds(itemIds) {
    const stringifiedIds = itemIds.join(`','`)
    const _tagList = await this.executeQuery(this.query.getByItemIds(stringifiedIds))
    let tagsByItemId = {}
    _tagList.forEach(tag => {
      let itemId = tag.item_rid
      tagsByItemId[itemId] = tagsByItemId[itemId] ? tagsByItemId[itemId] : []
      tagsByItemId[itemId].push(new Tag(tag))
    })
    return tagsByItemId
  }
}

export default TagRepository
