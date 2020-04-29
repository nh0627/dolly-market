import createError from "http-errors"
import { MySQLRepositoryBase } from "../../server/base/"
import { itemQuery } from "../query"
import { paging } from "../constant"
import TagRepository from "./tagRepository"
import ImageRepository from "./imageRepository"
import { Image, Item, User } from "../model"
import { v4 as uuidv4 } from "uuid"

class ItemRepository extends MySQLRepositoryBase {
  constructor() {
    super(itemQuery)
    // Todo: 이 부분 부모로 올리기
    this.tagRepository = new TagRepository()
    this.imageRepository = new ImageRepository()
  }

  async get(pageNum) {
    const _itemList = await this.executeQuery(
      this.query.get(
        pageNum || paging.DEFAULT_PAGE_INDEX,
        paging.DEFAULT_PAGE_SIZE
      )
    )

    const itemIdList = _itemList.map((item) => item.pid)
    const tags = await this.getTagsByItemIds(itemIdList)

    let itemList = _itemList.map((item) => {
      item["tags"] = tags[item.pid] ? tags[item.pid] : []
      item["images"] = this.getMasterImage(item)
      item["user"] = this.getUser(item)
      return new Item(item)
    })

    return itemList
  }

  async getById(pid) {
    let _item = await this.executeQuery(this.query.getById(pid))

    if (_item.length < 1) {
      throw new createError(404, `Item not Found: ${pid}`)
    }

    let item = _item[0]

    item["user"] = this.getUser(item)
    item["images"] = await this.getImagesByItemId(item)
    item["tags"] = await this.getTagsByItemId(item)
    item = new Item(item)

    return item
  }

  getUser(item) {
    // 유저 정보 추가
    const _profileImage = {
      pid: item.user_file_pid,
      create_date: item.user_file_create_date,
      file_name: item.user_file_name,
      file_url: item.user_file_url,
    }

    const profileImage = new Image(_profileImage)

    let user = {
      pid: item.user_pid,
      create_date: item.user_create_date,
      modify_date: item.user_modify_date,
      email: item.user_email,
      nickname: item.user_nickname,
      image: profileImage,
    }

    user = new User(user)

    return user
  }

  getMasterImage(item) {
    // 마스터 이미지 리스트 추가
    const masterImage = {
      pid: item.master_file_pid,
      create_date: item.master_file_create_date,
      file_name: item.master_file_name,
      file_url: item.master_file_url,
      file_size: item.master_file_size,
      master_flag: item.master_file_master_flag,
    }

    const imageArr = []
    imageArr.push(new Image(masterImage))

    return imageArr
  }

  async getTagsByItemIds(itemIdList) {
    const tagsByItemId = await this.tagRepository.getByItemIds(itemIdList)
    return tagsByItemId
  }

  async getTagsByItemId(item) {
    const tagList = await this.tagRepository.getByItemId(item.pid)
    return tagList
  }

  async getImagesByItemId(item) {
    const imageList = await this.imageRepository.getByItemId(item.pid)
    return imageList
  }

  async save(item) {
    item.pid = uuidv4()
    await this.executeQuery(this.query.save(item))
  }
}

export default ItemRepository
