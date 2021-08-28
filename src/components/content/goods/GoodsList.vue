<!--
 * @Description: 
 * @Author: urnotyl
 * @Date: 2021-08-28 19:13:54
 * @LastEditors: urnotyl
 * @LastEditTime: 2021-08-28 22:12:52
-->
<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";

export default {
  data() {
    return {};
  },
  name: "GoodList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>