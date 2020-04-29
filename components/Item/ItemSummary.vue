<template>
  <section class="section item-detail">
    <div class="content is-medium">
      <p class="title">
        {{ title }}
      </p>
      <p class="subtitle">
        {{ description }}
      </p>
      <p class="subtitle is-3">$ {{ price }}</p>
      <Tag :tags="tags" />
    </div>
    <div class="box">
      <UserBadge
        :image="user.image"
        :nickname="user.nickname"
        :email="user.email"
      />
    </div>
    <div class="item-controls">
      <b-button type="is-success" expanded>
        Buy Now
      </b-button>
    </div>
  </section>
</template>

<script>
import UserBadge from "@/components/User/UserBadge"
import Tag from "@/components/Common/Tag"

export default {
  components: {
    UserBadge,
    Tag,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
    },
  },
}
</script>
