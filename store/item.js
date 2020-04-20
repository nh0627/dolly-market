export const state = () => ({
  items: [],
  item: {},
})

export const mutations = {
  SET_ITEMS(state, newItems) {
    state.items = newItems
  },
  SET_MORE_ITEMS({ items }, moreItems) {
    items.push(...moreItems)
  },
  SET_ITEM(state, item) {
    state.item = item
  },
}

export const getters = {
  getItems({ items }) {
    items.map((item) => {
      // Todo: Momento 같은 라이브러리 사용해 코드 줄이기
      // 1주일 단위로 new Data 생성
      var today = new Date()
      var week = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
      )
      var itemArr = item.createDate.split("-")
      var createDate = new Date(
        itemArr[0],
        itemArr[1] - 1,
        Number(itemArr[2].slice(0, 2))
      )
      var dateSet

      itemArr[2] = itemArr[2].slice(0, 2)
      dateSet = itemArr.join(".")
      item.create = dateSet

      if (week < createDate) {
        item.isNew = true
      } else {
        item.isNew = false
      }
    })
    return items
  },
  getItem({ item }) {
    return item
  },
}

export const actions = {
  async loadItems({ commit }) {
    const { data } = await this.$axios.get(`/api/items`)
    commit("SET_ITEMS", data)
  },
  async loadMoreItems({ commit }, pageNum) {
    const { data } = await this.$axios.get(`/api/items?pageNum=${pageNum}`)
    commit("SET_MORE_ITEMS", data)
  },
  async loadItem({ commit }, id) {
    const { data } = await this.$axios.get(`/api/items/${id}`)
    commit("SET_ITEM", data)
  },
}
