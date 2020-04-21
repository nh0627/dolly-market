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
    let stringifiedIds = itemIds.join(`','`)
    const tagList = await this.executeQuery(this.query.getByItemIds(stringifiedIds))
    return tagList
  }
}

export default TagRepository
